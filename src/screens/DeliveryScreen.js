import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import {Title} from "native-base"
import { Button } from "react-native-elements"
//import Icon from "react-native-vector-icons/FontAwesome5"
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Content, Card, CardItem,  Body, Textarea, Form, Item, Input ,Icon } from "native-base";







export default function DeliveryScreen({navigation}) {
    return (
        <View style={{flex:1}}>

<ScrollView style={{marginBottom:110}}>

     <Button  type="clear" style={{paddingLeft:15, alignSelf:"flex-start", paddingTop:30}}
     icon ={<Ionicons name="ios-arrow-round-back"
     size={30}
     color="black"     />}
            onPress={() => navigation.navigate("HomeScreen")} />  

            <Title style={{textAlign:"left", marginTop:2, fontSize:30, paddingLeft:15, paddingBottom:19}}>Delivery info.</Title>

       
            
            <Form>
          <Card transparent>
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
        



        
          <Card transparent>
            <CardItem>
              <Body>
                <Title style={{textAlign:"left"}}>
                 Last Name
                </Title>

                <Item >
            <Input  placeholder=''/>
            <Icon name='information-circle' />
          </Item>

              </Body>
            </CardItem>
          </Card>



          <Card transparent>
            <CardItem>
              <Body>
                <Title style={{textAlign:"left"}}>
                 Phone No.
                </Title>

                <Item success>
            <Input   placeholder=''/>
            <Icon name='information-circle' />
          </Item>

              </Body>
            </CardItem>
          </Card>


          <Card transparent>
            <CardItem>
              <Body>
                <Title style={{textAlign:"left"}}>
                 Address
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
