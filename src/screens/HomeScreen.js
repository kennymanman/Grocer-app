
import React from "react"
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native"
import { Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome5"
import ban from "../img/ban.png"
import fresh from "../img/fresh.png"
import hus from "../img/hus.png"
import pig from "../img/pig.png"
import pat from "../img/pat.png"
import veg from "../img/veg.png"
import mea from "../img/mea.png"
import brea from "../img/brea.png"
import egg from "../img/egg.png"
import cere from "../img/cere.png"
import dri from "../img/dri.png"
import al from "../img/al.png"
import { Headline } from 'react-native-paper';
import Fruits from "../screens/Fruits"
import { NavigationContainer } from '@react-navigation/native';







export default function HomeScreen ({ navigation }) {
    return (

<View>




<ScrollView showsHorizontalScrollIndicator={false} >
    
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

  

            <Image  style={{ width: 325, height: 220, alignItems: "center", borderRadius: 20, marginTop: 20}} source={ban} />

            <Image  style={{ width: 325, height: 350, alignItems: "center", borderRadius: 20, marginTop: 20}} source={hus} />


            <Image  style={{ width: 325, height: 220, alignItems: "center", borderRadius: 20, marginTop: 20}} source={pig} />


            <Image  style={{ width: 325, height: 340, alignItems: "center", borderRadius: 20, marginTop: 20}} source={fresh} />












<View style={{marginTop: 40}} backgroundColor="white">



<ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>



    <View style={{paddingRight:15}}>
    <Headline>Fruits</Headline>
    <View>
        <TouchableOpacity onPress={() => navigation.navigate ('Fruits')}>

    <Image  style={{ width: 250, height: 315, alignItems: "center", borderRadius: 20, marginTop: 20}} source={pat}  />
    
    </TouchableOpacity>
    
    </View>
    </View>








    <View style={{paddingRight:15 }}>
    <Headline>Vegetables</Headline>
    <View>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate ('Fruits')}>

    <Image  style={{ width: 250, height: 315, alignItems: "center", borderRadius: 20, marginTop: 20}} source={veg}  />
    
    </TouchableOpacity>
    
    </View>
    </View>







    <View style={{paddingRight:15 }}>
    <Headline>Meat & Seafood</Headline>
    <View>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate ('Fruits')}>

    <Image  style={{ width: 250, height: 315, alignItems: "center", borderRadius: 20, marginTop: 20}} source={mea}  />
    
    </TouchableOpacity>
    
    </View>
    </View>



    <View style={{paddingRight:15 }}>
    <Headline>Bread & Bakery</Headline>
    <View>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate ('Fruits')}>

    <Image  style={{ width: 250, height: 315, alignItems: "center", borderRadius: 20, marginTop: 20}} source={brea}  />
    
    </TouchableOpacity>
    
    </View>
    </View>





 <View style={{paddingRight:15 }}>
    <Headline>Dairy & Eggs</Headline>
    <View>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate ('Fruits')}>

    <Image  style={{ width: 250, height: 315, alignItems: "center", borderRadius: 20, marginTop: 20}} source={egg}  />
    
    </TouchableOpacity>
    
    </View>
    </View>




    <View style={{paddingRight:15 }}>
    <Headline>Cereals</Headline>
    <View>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate ('Fruits')}>

    <Image  style={{ width: 250, height: 315, alignItems: "center", borderRadius: 20, marginTop: 20}} source={cere}  />
    
    </TouchableOpacity>
    
    </View>
    </View>





    <View style={{paddingRight:15 }}>
    <Headline>Drinks</Headline>
    <View>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate ('Fruits')}>

    <Image  style={{ width: 250, height: 315, alignItems: "center", borderRadius: 20, marginTop: 20}} source={dri}  />
    
    </TouchableOpacity>
    
    </View>
    </View>







    <View style={{paddingRight:15 }}>
    <Headline>Alcohol</Headline>
    <View>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate ('Fruits')}>

    <Image  style={{ width: 250, height: 315, alignItems: "center", borderRadius: 20, marginTop: 20}} source={al}  />
    
    </TouchableOpacity>
    
    </View>
    </View>
   




    




    

    <View style={{paddingRight:63}}>
    <Headline>Snacks</Headline>
    </View>


    <View style={{paddingRight:63}}>
    <Headline>Spices,Sauces & Condiments</Headline>
    </View>


    <View style={{paddingRight:63}}>
    <Headline>Pantry,Canned & Dried items</Headline>
    </View>

    <View style={{paddingRight:63}}>
    <Headline>Household essentials</Headline>
    </View>

    <View style={{paddingRight:63}}>
    <Headline>Health & Nutrition</Headline>
    </View>

    <View style={{paddingRight:63}}>
    <Headline>Kids & Babies</Headline>
    </View>
</ScrollView>
</View>








<Text style={styles.rest}> Home screen </Text>



        </View>
 
        
 </ScrollView>
 </View>
        
    )
}



const styles = StyleSheet.create({

    container: {
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

      bitch: {
          alignItems: "flex-end"
      }
})
