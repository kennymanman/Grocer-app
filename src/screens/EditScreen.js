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

<ScrollView style={{marginBottom:45}}>


<Button  type="clear" style={{paddingLeft:15, alignSelf:"flex-start", paddingTop:35}}
     icon ={<Ionicons name="ios-arrow-round-back"
     size={30}
     color="black"     />}
            onPress={() => navigation.navigate("HomeScreen")} />  


      <Title style={{textAlign:"left", fontSize:30, color:"black", paddingLeft:19, paddingTop:12}} >Edit My Profile</Title>







      <Avatar rounded size={200} marginLeft={80} marginTop={20}
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  }}
  >
  <Accessory size={38} />
</Avatar>




<Form>
          <Card transparent style={{paddingTop:30}}>
            <CardItem>
              <Body>
                <Title style={{textAlign:"left"}}>
                 First Name
                </Title>

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
                <Title style={{textAlign:"left"}}>
                 Last Name
                </Title>

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
                <Title style={{textAlign:"left"}}>
                 Phone Number
                </Title>

                <Item success>
            <Input  placeholder=''/>
            <Icon name='information-circle' />
          </Item>

              </Body>
            </CardItem>
          </Card>



          <Card transparent style={{paddingTop:20, marginBottom:60}}>
            <CardItem>
              <Body>
                <Title style={{textAlign:"left"}}>
                 Email Address
                </Title>

                <Item success>
            <Input  placeholder=''/>
            <Icon name='information-circle' />
          </Item>

              </Body>
            </CardItem>
          </Card>






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