import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { Container, Header, Content, Item, Input, Button, Icon } from 'native-base';

export default function LogIn() {
    return (

<View>
        <ImageBackground 
        
        source={require('../img/run.png')} 
        
        style={{
            height: 670,
            width: 375,
            position: 'relative', // because it's parent
            
            top: 0,
            
          }}
        
        
   
        

        />


<Item style={{marginBottom:20, marginRight:20, marginLeft:20, backgroundColor:"white", position:"absolute", marginTop: 360}}rounded>
            <Input style={{fontSize:15}} placeholder='E-mail '/>
          </Item>


          <Item style={{marginBottom:20, marginRight:20, marginLeft:20, backgroundColor:"white", position:"absolute", marginTop: 450}}rounded>
            <Input style={{fontSize:15}} placeholder='Password '/>
          </Item>


          <Button style={{marginLeft:69, paddingLeft: 90, paddingRight:90, paddingTop:30, paddingBottom:30, marginBottom:40, position:"absolute", marginTop:530}} rounded dark>
            <Text style={{color: "white", textAlign: "center", paddingBottom:20, fontSize:16}}>Log In</Text>
          </Button>




</View>
    )
}
