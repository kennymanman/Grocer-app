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




export default function ProductPage({ route, navigation }) {
  // routes

  const { updateCart } = useContext(AddCartContext);
  const { updateSaved } = useContext(AddSavedContext);

  const useCart = updateCart;
  const useSaved = updateSaved;

  let conditionData = [
    [
      "select quantity",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12"
    ]
  ];

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
           style={{position:"absolute"}}
          height={294}
          showArrows={false}
          loop={false}
          //data={route.params.images}

          data={[
            { url: "https://images.pexels.com/photos/4110334/pexels-photo-4110334.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
            { url: "https://multimediarepository.amadeus.com/cmr/retrieve/hotel/AF63CB0620F94B6FAE8B5BD390C58213" },
            { url: "https://multimediarepository.amadeus.com/cmr/retrieve/hotel/895A263C718547B38011E65E53A7085A" },
            { url: "https://multimediarepository.amadeus.com/cmr/retrieve/hotel/186D75B7A075470F95C7DF5E99F87380" }
          ]} 
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
            top: 283,
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

          <Title style={{ fontSize: 25, textAlign: "left", top: 15, left: 12 }}>
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


          <Title style={{ fontSize: 20, textAlign: "left", top: 9, left: 18 }}>
            ${route.params.price}
          </Title>



          <Subtitle
            style={{ fontSize: 12, textAlign: "left", top: 19, left: 18 }}
          >
            Product Information
          </Subtitle>
          <Text
            style={{
              fontSize: 12,
              textAlign: "left",
              top: 29,
              left: 20,
              marginRight: 30
            }}
          >
            
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. 
          </Text>

          <Subtitle
            style={{
              fontSize: 12,
              textAlign: "left",
              top: 50,
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
              top: 55,
              left: 19,
              marginRight: 30
            }}
          >
            Mr Jon Snow
          </Text>


          <View style={{ marginTop: 70, left: 25, flexDirection:"row" }}>


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

<Title style={{ textAlign: "left", marginTop: 8, marginRight:120  }}>Quantity</Title>

<NumericInput  rounded minValue={0} rightButtonBackgroundColor="#2bc5fc" leftButtonBackgroundColor="#2bc5fc" onChange={value => console.log(value)} />



            
          </View>

          <Button //Checkout Button
            title="Add to Cart"
            style={{
              marginBottom: 900,
              width: 300,
              marginTop: 15,
              alignSelf: "center",
              paddingRight: 20,
              height: 100,
              position: "relative",
              paddingLeft: 13
            }}
            onPress={() => updateCart({ name, price, image })}
          />
        </ImageBackground>
      </View>
    </ScrollView>




    </ImageBackground>

    </View>
  );
}