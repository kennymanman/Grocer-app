import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome5"








export default function SearchScreen ({navigation}) {
    return (

        <View style={styles.container}>
             
            

            <Button style={styles.bitch} 
            type="clear"
            icon={
               <Icon
                name= "bars"
                size= {20}
                color= "black"
                />
            }
            
            onPress={() => navigation.openDrawer()} />    



<Text style={styles.rest}> Search screen </Text>

        </View>

        
    )
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 24,
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
          alignItems: "flex-end"
      }
})
