import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import {Title} from "native-base"
import { Button } from "react-native-elements"
import { Ionicons } from '@expo/vector-icons'

export default function HelpScreen({navigation}) {
  return (
    <View>


<ImageBackground
             
             source={require('../rmg/gina.jpg')}
             imageStyle={{borderRadius:0}}
          style={{
            height: 670,
            width: 375,
            position: 'relative', // because it's parent
            
            top: 0,  
          }}
        >




<Button  type="clear" style={{paddingLeft:15, alignSelf:"flex-start", paddingTop:35}}
     icon ={<Ionicons name="ios-arrow-round-back"
     size={30}
     color="white"     />}
            onPress={() => navigation.navigate("HomeScreen")} />  


      <Title style={{textAlign:"left", fontSize:30, color:"white", paddingLeft:19, paddingTop:12}} >Need Help?</Title>








      <ImageBackground
source={require("../rmg/pose.jpg")} 
imageStyle={{borderRadius:12}}

  style={{
    height: 220,
    width: 355,
    position: "relative", // because it's parent
    marginBottom:15,
    marginTop:19,
    marginRight:11,
    marginLeft:7,
    top: 2,
    left: 2
  }}
>

<Text    
  style={{
      fontWeight: "bold",
      color: "black",
      position: "absolute", // child
      top: 12, // position where you want
      left: 0,
      marginBottom:55,
      marginLeft:10,
      fontSize: 30
    }}
  >
    Call Us
  </Text>

<Text style={{
  bottom:58,
   left:0,
   position:"absolute",
    fontSize:15,
    marginBottom:35,
     marginLeft:10,
     color:"black"
     }}>We at the Garden Support team are here to help guide you through issues you may be experiencing. Feel free to call us.</Text>


     <Text style={{bottom:63, position: "absolute", marginLeft:10, marginTop:20}}>Direct Phonelines:   08181698087</Text>

</ImageBackground>




<ImageBackground
source={require("../rmg/mail.jpg")} 
imageStyle={{borderRadius:12}}

  style={{
    height: 220,
    width: 355,
    position: "relative", // because it's parent
    marginBottom:15,
    marginTop:19,
    marginRight:11,
    marginLeft:7,
    top: 2,
    left: 2
  }}
>

<Text    
  style={{
      fontWeight: "bold",
      color: "white",
      position: "absolute", // child
      top: 12, // position where you want
      left: 0,
      marginBottom:55,
      marginLeft:10,
      fontSize: 30
    }}
  >
    Email Us
  </Text>

<Text style={{
  bottom:70,
   left:0,
   position:"absolute",
    fontSize:15,
    marginBottom:35,
     marginLeft:10,
     color:"white"
     }}>Reach us through email. Any issues or questions you may have will be replied to shortly.</Text>


     <Text style={{bottom:72, position: "absolute", marginLeft:10, marginTop:20, color:"white"}}>Customer Support:  customersupport@garden.com</Text>
     <Text style={{bottom:50, position: "absolute", marginLeft:10, marginTop:20, color:"white"}}>Enquiry Email:            askgarden@garden.com</Text>

</ImageBackground>










      </ImageBackground>

     </View>
  );
}
