
import React from "react"
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native"
import { Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome5"
import ban from "../img/ban.png"
import fresh from "../img/fresh.png"
import hus from "../img/hus.png"
import { Headline } from 'react-native-paper';
//import Fruits from "../screens/Fruits"
import { NavigationContainer } from '@react-navigation/native';
import {Title} from "native-base"
import { Avatar } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';





export default function HomeScreen ({ navigation }) {


    return (

<View >

<ScrollView showsHorizontalScrollIndicator={false} >
    
        <View style={styles.container} >
             
            
           <Button style={styles.ditch} 
            type="clear"
            icon={
               <Icon
                name= "bars"
                size= {20}
                color= "black"
                />
            }
            
        onPress={() => navigation.openDrawer()} />

  

            <Image  style={{ width: 325, height: 220, alignItems: "center", borderRadius: 19, marginTop: 29}} source={ban} />

            <Image  style={{ width: 325, height: 350, alignItems: "center", borderRadius: 20, marginTop: 20}} source={hus} />

            <Image  style={{ width: 325, height: 290, alignItems: "center", borderRadius: 20, marginTop: 20}} source={fresh} />


        </View>
 
        
 </ScrollView>

 </View>

        
    )
}



const styles = StyleSheet.create({

    container:{
        flex: 1,
        padding: 24,
        backgroundColor: "#ffffff"
      },

      rest: {
          textAlign: "center",
          marginTop: 100
      },

      best: {
          justifyContent: "flex-start",
          marginTop: 20
      },

      ditch: {
          alignItems: "flex-end",
          marginTop: 20
      }
})
