import React, { useContext, useState } from "react";
import {
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Tile } from "react-native-elements";
import { Title, Subtitle, Text, Icon } from "native-base";
import { Button } from "react-native-elements";
import { AddCartContext, AddSavedContext } from "./CartContext";
import { RNCarousel } from "react-native-carousel-cards";
import DropdownMenu from "react-native-dropdownmenus";
import NumericInput from 'react-native-numeric-input'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  SlideInMenu
} from 'react-native-popup-menu';

import SlidingUpPanel from 'rn-sliding-up-panel';
import RNPickerSelect from 'react-native-picker-select';











export default function ProductPage({ route, navigation }) {
  // routes

  const { updateCart } = useContext(AddCartContext);
  const { updateSaved } = useContext(AddSavedContext);

  const useCart = updateCart;
  const useSaved = updateSaved;

  

  return (

<View>

<ImageBackground  
source={require('../rmg/backy.jpg')}
style={{
  height: 2000,
  width: 375,
  position:"relative"
}}
>






    <ScrollView>
      <View>




        <Button
          type="clear"
          style={{
            paddingLeft: 9,
            position:"relative",
            paddingRight: 329,
            paddingTop: 3,
            top: 18
          }}
          icon={
            <Ionicons name="ios-arrow-round-back" size={30} color="black" />
          }
          onPress={() => navigation.goBack()}
        /> 




        <RNCarousel
           style={{}}
          height={395}
          showArrows={false}
          loop={false}
          data={route.params.images}

          />

        




          

         
       





{/*<Button
          type="clear"
          style={{
            paddingLeft: 9,
            position:"relative",
            paddingRight: 329,
            paddingTop: 3,
            top: 1,
            
            
          }}
          icon={
            <Ionicons name="ios-arrow-round-back" size={30} color="black" />
          }
          onPress={() => navigation.goBack()}
        /> */}









<SlidingUpPanel height={50} draggableRange={{top:229, bottom:15}} friction={12} >


        <ImageBackground
          source={require("../rmg/tyr.jpg")}
          imageStyle={{ borderRadius: 21 }} //For reshaping the image.
          style={{
            height: 500,
            width: 377,
            position: "absolute", // because it's parent
            marginBottom: 300,

            marginRight: 0,
            marginLeft: 0,
            top: 0,
            left: 0
          }}
        >




         {/* <Button
            type="clear"
            style={{
              //right:0,
              top: 0,
              marginTop: 2,
              paddingLeft: 275
            }}
            icon={<Feather name="heart" size={23} color="black" />}
            onPress={() => updateSaved({ name, price, description, image })}
          /> */}




       <View style={{
        flexDirection:"row"

       }}>

          <Title style={{ fontSize: 25, textAlign: "left", top: 20, left: 12 }}>
            {" "}
            {route.params.name}
          </Title>


          <Button
            type="clear"
            style={{
              //right:0,
              top: 9,
              marginTop: 0,
              paddingLeft: 197
            }}
            icon={<Feather name="heart" size={23} color="black" />}
            onPress={() => updateSaved({ name, price, description, image })}
          />

</View>





          <Title style={{ fontSize: 20, textAlign: "left", top: 12, left: 18 }}>
            ${route.params.price}
          </Title>



          <Subtitle
            style={{ fontSize: 12, textAlign: "left", top: 35, left: 18 }}
          >
            Product Information
          </Subtitle>

          <Text
            style={{
              fontSize: 12,
              textAlign: "left",
              top: 42,
              left: 20,
              marginRight: 30
            }}
          >
            
            {route.params.description}

          </Text>

          <Subtitle
            style={{
              fontSize: 12,
              textAlign: "left",
              top: 65,
              left: 15,
              marginRight: 30
            }}
          >
            Vendor Name
          </Subtitle>
          <Text
            style={{
              fontSize: 15,
              textAlign: "left",
              top: 72,
              left: 19,
              marginRight: 30,
              fontSize:13
            }}
          >
            {route.params.vendor}
          </Text>


          <View style={{ marginTop: 130, left: 25, flexDirection:"row" }}>


           {/*} <DropdownMenu
              style={{ flex: 1 }}
              bgColor={"white"}
              tintColor={"#666666"}
              activityTintColor={"green"}
              //arrowImg={}
              // checkImage={}
              // optionTextStyle={{color: '#333333'}}
              //titleStyle={{color: '#333333'}}
              maxHeight={300}
              handler={(selection, row) =>
                // this.setState({text: data[selection][row]})
                this._conditionChange(selection, row)
              }
              data={conditionData}
              selectIndex={[0]}
            ></DropdownMenu> */}

<Title style={{ textAlign: "left", marginTop: 0, marginRight:50  }}>Quantity</Title>

{/*<NumericInput   rounded minValue={0} rightButtonBackgroundColor="black" leftButtonBackgroundColor="black"  iconStyle={{ color: 'white' }} onChange={value => console.log(value)} /> */}



            
          

        {/*}  <Menu >
      <MenuTrigger text='Select quantity' />
      
      <MenuOptions >
        <MenuOption onSelect={() => alert(`Save`)} text='Save' />
        <MenuOption onSelect={() => alert(`Delete`)} >
          <Text style={{color: 'red'}}>Delete</Text>
        </MenuOption>
        <MenuOption  text='1' />
      </MenuOptions>
      
          </Menu> */}

<View style={{marginTop:4}}>

<RNPickerSelect 
            onValueChange={(value) => console.log(value)}
            placeholder={{label:"select quantity"}}
            items={[
                { label: '1', value: '1' },
                { label: '2', value: '2' },
                { label: '3', value: '3' },
                { label: '4', value: '4' },
                { label: '5', value: '5' },
                { label: '6', value: '6' },
                { label: '7', value: '7' },
                { label: '8', value: '8' },
                { label: '9', value: '9' },
                { label: '10', value: '10' },
                { label: '11', value: '11' },
                { label: '12', value: '12' },
                { label: '13', value: '13' },
                { label: '14', value: '14' },
                { label: '15', value: '15' },
                { label: '16', value: '16' },
                { label: '17', value: '17' },
                { label: '18', value: '18' },
                { label: '19', value: '19' },
                { label: '20', value: '20' },
            ]}
        />

</View>













    </View>





          <Button //Checkout Button
            title="Add to Cart"
            style={{
              marginBottom: 900,
              width: 300,
              marginTop: 65,
              alignSelf: "center",
              paddingRight: 20,
              height: 100,
              position: "relative",
              paddingLeft: 13
            }}
            onPress={() => updateCart({ name, price, image })}
          />
        </ImageBackground>

        </SlidingUpPanel>


      </View>
    </ScrollView>




    </ImageBackground>

  

    </View>
  );
}