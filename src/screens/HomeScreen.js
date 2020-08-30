import { Container } from "@material-ui/core"
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Avatar } from "react-native-paper"
import DrawerContent from "../Navigation/DrawerContent"
import { NavigationContainer, DrawerActions } from '@react-navigation/native';






export default function HomeScreen ({navigation}) {
    return (

        <View style={styles.container}>
             <Avatar.Icon style={styles.best} size={29} Icon="folder"  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}   />
            <Text style={styles.rest}> Home </Text>
            
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
      }
})
