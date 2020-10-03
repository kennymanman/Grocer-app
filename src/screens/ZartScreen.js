import React, {useContext} from 'react'
import { View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    FlatList,
    ScrollView}
    from "react-native"
import { Button } from "react-native-elements"
import Icon from "react-native-vector-icons/FontAwesome5"
import {Title, Left} from "native-base"
import { Feather } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import { FAB } from "react-native-paper"
import {AddCartContext} from "./CartContext"









export default function ZartScreen() {


    const { cart } = useContext(AddCartContext)
    const {updateCart} = useContext(AddCartContext)

    const cartName= updateCart(cart)


    return (



        <View style={{ flex: 1,
            justifyContent: 'space-between',
            padding: 3,
            flexDirection:'row',
            alignItems:'center'}}>



              <AddCartContext.Consumer>
              
              
             <ImageBackground 
              
            source={require('../img/sig.png')} 
            imageStyle={{borderRadius:12}} //For reshaping the image.
              
            style={{
             height: 140,
             width: 150,
             position: 'relative', // because it's parent
             marginBottom:15,
             marginTop:19,
             marginRight:7,
             marginLeft:4,
             top: 2,
             left: 2
                }}
              >
              
              
            <Button type="clear"    
            style={{top:0,
              paddingLeft:1,
              left:0,
              marginTop:2,
              marginRight:118 }}
            icon ={  <FontAwesome name="remove"
            size={17}
            color="white"      />}
            onPress={()=> console.log('Pressed')}
            />
              
            </ImageBackground>          
            
            <View style={{flexDirection:"column"}}>
            
            <Title style={{marginBottom:3,   //For passing down the Name.
              marginRight:105,
              fontSize:20,
              color:"white"}}> {cartName}
            </Title>
            

            <Title style={{ marginRight:127,  //For passing down the Price.
              marginBottom:3,
              fontSize:17,
              color:"white"}}>$100</Title>
            


            <Title  style={{ marginRight:100,  //For passing down the quantity needed.
             marginBottom:10,
             fontSize:13,
             color:"white"}}>Quantity:4</Title>
            
            
            
            <View style={{flexDirection:"row", //Row for flex direction was used to align multiple items on the same line.
             paddingLeft:12,
             marginBottom: 40}}>
            
            
            
            <FAB                           //Fab is the increment button.
              style={{paddingLeft:1,
              marginRight:10,
              position:"absolute"}}
              small
              animated
            icon ="plus"
            color="white"
            onPress={() => console.log('Pressed')}
            />
            
            <FAB                          //Fab is the decrement button.
             style={{marginRight:20,
              paddingRight:1,
              position:"absolute",
              marginLeft:65 }}
              small
              animated
            icon ="minus"
            color="white"
            onPress={() => console.log('Pressed')}
            />
            
            
            </View>
            </View>



            </AddCartContext.Consumer>
            
            </View>
    )
}
