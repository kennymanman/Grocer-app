import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome5"
import { Ionicons } from '@expo/vector-icons';
import {Header, Left, Right, Title, Body} from 'native-base'







export default function Vegetables ({navigation}) {
    return (

        <View >

<Header style={{marginTop: 3}}>
    <Left>

<Button  type="clear" style={{paddingLeft:9}}
        icon ={  <Ionicons name="ios-arrow-round-back"  size={30} color="black"     />}
            
        onPress={() => navigation.navigate("HomeScreen")} /> 
</Left>

<Body>
<Title >Vegetables</Title>
</Body>

<Right>
            <Button  style={styles.bitch}
            type="clear"
            icon={
               <Icon
                name= "bars"
                size= {20}
                color= "black"
                />
            }
            
            onPress={() => navigation.openDrawer()} />    
</Right>

</Header>











<Text style={styles.rest}> see my Veggies </Text>

        </View>

        
    )
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#eaeaea"
      },

      rest: {
          textAlign: "center",
          marginTop: 100
      },

      best: {
          justifyContent: "flex-start",
          marginTop: 20
      },

      bitch: {
          
          alignSelf: "flex-end",
          paddingRight:9,
          paddingTop: 1
      }
})
