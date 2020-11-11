import React from 'react'
import { View, Text, ImageBackground, ScrollView } from 'react-native'
import {Title} from "native-base"
import { Button } from "react-native-elements"
import { Ionicons } from '@expo/vector-icons'
import { Avatar, Accessory } from 'react-native-elements';
import { Container, Header, Content, Card, CardItem,  Body, Textarea, Form, Item, Input ,Icon } from "native-base";


export default function EditScreen({navigation}) {
  return (
    <View>

<ScrollView >


<Button  type="clear" style={{paddingLeft:15, alignSelf:"flex-start", paddingTop:35}}
     icon ={<Ionicons name="ios-arrow-round-back"
     size={30}
     color="black"     />}
            onPress={() => navigation.navigate("HomeScreen")} />  


      <Title style={{textAlign:"left", fontSize:25, color:"black", paddingLeft:19, paddingTop:12}} >Edit My Profile</Title>







      <Avatar rounded size={170} marginLeft={93} marginTop={20}
       icon={{name: 'user', type: 'font-awesome'}}
  >
  <Accessory size={38} />
</Avatar>




<Form>
          <Card transparent style={{paddingTop:30}}>
            <CardItem>
              <Body>
                <Text style={{textAlign:"left", fontSize:16}}>
                 First Name
                </Text>

                <Item success>
            <Input  placeholder=''/>
            <Icon name='information-circle' />
          </Item>

              </Body>
            </CardItem>
          </Card>


          <Card transparent style={{paddingTop:30}}>
            <CardItem>
              <Body>
                <Text style={{textAlign:"left", fontSize:16}}>
                 Last Name
                </Text>

                <Item success>
            <Input  placeholder=''/>
            <Icon name='information-circle' />
          </Item>

              </Body>
            </CardItem>
          </Card>




          <Card transparent style={{paddingTop:30}}>
            <CardItem>
              <Body>
                <Text style={{textAlign:"left", fontSize:16}}>
                 Phone Number
                </Text>

                <Item success>
            <Input  placeholder=''/>
            <Icon name='information-circle' />
          </Item>

              </Body>
            </CardItem>
          </Card>




          <Card transparent style={{paddingTop:20, marginBottom:50}}>
            <CardItem>
              <Body>
                <Text style={{textAlign:"left", fontSize:16}}>
                 Email Address
                </Text>

                <Item success>
            <Input  placeholder=''/>
            <Icon name='information-circle' />
          </Item>

              </Body>
            </CardItem>
          </Card>



          <ImageBackground 
        
        source={require("../rmg/tyr.jpg")} 
        style={{
            height: 50,
            width: 390,
            position: 'relative', // because it's parent
            top: 0,
            
          }}
        
        />




          <Button                                          //Submit Button
title="Submit"
style={{marginBottom:20,
width:300,
marginTop:9,
alignSelf: "center",
paddingRight:20,
height:100, position:"relative", paddingLeft:13}}
/>

</Form>




</ScrollView>

    </View>


  )
}