import React from 'react';
import { View, Text, ImageBackground, ScrollView} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Title } from 'react-native-paper';
import { Subheading } from 'react-native-paper';



export default function SignUp({navigation}) {
  return (
   
  <View style={{backgroundColor:"#21b464"}}>

    <ScrollView>


    <Button iconLeft  transparent light     style={{marginTop:30, marginLeft:10}} 
        onPress={() => navigation.navigate("SearchScreen")} >
            <Icon name='arrow-back' color="black" />
            
          </Button>



<Title style={{marginLeft: 30, color:"white", fontSize:45, marginTop:40, paddingTop:20}}>Sign up </Title>

<Title style={{marginLeft: 30, color:"white", fontSize:30, marginTop:15, paddingTop:20}}>Welcome to Garden

<Title style={{color:"yellow", fontSize:39}}>.</Title>



 </Title>
    












 <View style={{marginTop: 50}}>


 <Item  style={{marginBottom:20, marginRight:24, marginLeft:24, backgroundColor:"white"}} rounded>
            <Input  style={{fontSize:15}} placeholder='First Name'/>
          </Item>


          <Item style={{marginBottom:20, marginRight:24, marginLeft:24, backgroundColor:"white"}} rounded>
            <Input style={{fontSize:15}} placeholder='Last Name'/>
          </Item>


          <Item style={{marginBottom:20, marginRight:24, marginLeft:24, backgroundColor:"white"}}rounded>
            <Input style={{fontSize:15}} placeholder='E-mail '/>
          </Item>

          <Item style={{marginBottom:20, marginRight:24, marginLeft:24, backgroundColor:"white"}} rounded>
            <Input style={{fontSize:15}} placeholder='Phone-number'/>
          </Item>

          <Item style={{marginBottom:20, marginRight:24, marginLeft:24, backgroundColor:"white"}} rounded>
            <Input style={{fontSize:15}} placeholder='Password'/>
          </Item>

          <Item style={{marginBottom:20, marginRight:24, marginLeft:24, backgroundColor:"white"}} rounded>
            <Input style={{fontSize:15}} placeholder='Confirm password'/>
          </Item>

          <Button style={{marginLeft:69, paddingLeft: 90, paddingRight:90, paddingTop:30, paddingBottom:30, marginBottom:40}} rounded dark>
            <Text style={{color: "white", textAlign: "center", paddingBottom:20, fontSize:16}}>Submit</Text>
          </Button>



</View>






   


   </ScrollView>
  </View>
  )
}
