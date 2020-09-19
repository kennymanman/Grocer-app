import React from "react"
import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native"
import { Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome5"
import { Container, Header, Item, Input,  Text } from 'native-base';
import { Feather } from '@expo/vector-icons';
import sig from "../img/sig.png"

import pat from "../img/pat.png"
import veg from "../img/veg.png"
import mea from "../img/mea.png"
import brea from "../img/brea.png"
import egg from "../img/egg.png"
import cere from "../img/cere.png"
import dri from "../img/dri.png"
import al from "../img/al.png"
import sna from "../img/sna.png"
import spi from "../img/spi.png"
import pan from "../img/pan.png"
import hou from "../img/hou.png"
import vit from "../img/vit.png"
import ki from "../img/ki.png"

import {Title} from "native-base"















export default function SearchScreen ({navigation}) {
    return (


        


        <View >






             
    
        <Header  style={{marginTop:12  }} searchBar rounded   >

          <Item >
            <Icon style={{paddingLeft:25, paddingRight:30}} size={15} name="search" />
            <Input  placeholder="Search" />
            
          </Item>

          <Button style={styles.bitch} 
            type="clear"
            icon={
               <Icon
                name= "bars"
                size= {21}
                color= "black"
                />
            }
            
            onPress={() => navigation.openDrawer()} />    


        </Header>




        

        


        <ScrollView >

        <View style={{marginTop: 5,  
        backgroundColor: "white"}} >

  


      

        <Image  style={{ width: 346, height: 150, alignItems: "center", borderRadius: 20, marginBottom:35, marginLeft: 12, marginRight:25}} source={sig} />






        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>



<View style={{paddingRight:10, paddingLeft:19}}>

<Title>Fruits</Title>
<View>
    <TouchableOpacity
     onPress={() => navigation.navigate ( 'Cat', { screen: 'Fruits'}) }>

<Image  style={{ width: 210, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom:100}} source={pat}  />

</TouchableOpacity>

</View>
</View>



<View style={{paddingRight:10 }}>

<Title>Vegetables</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Cat', { screen: 'Vegetables'})} >

<Image  style={{ width: 210, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom:100}} source={veg}  />

</TouchableOpacity>

</View>
</View>



<View style={{paddingRight:15 }}>
<Title>Meat & Seafood</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Cat', { screen: 'Meat'})}>

<Image  style={{ width: 210, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={mea}  />

</TouchableOpacity>

</View>
</View>



<View style={{paddingRight:15 }}>
<Title>Bread & Bakery</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Bread')}>

<Image  style={{ width: 210, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10 , marginBottom: 100}} source={brea}  />

</TouchableOpacity>

</View>
</View>



<View style={{paddingRight:15 }}>
<Title>Dairy & Eggs</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Eggs')}>

<Image  style={{ width: 210, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={egg}  />

</TouchableOpacity>

</View>
</View>



<View style={{paddingRight:15 }}>
<Title>Cereals</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Cereal')}>

<Image  style={{ width: 210, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={cere}  />

</TouchableOpacity>

</View>
</View>



<View style={{paddingRight:15 }}>
<Title>Drinks</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Drinks')}>

<Image  style={{ width: 210, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={dri}  />

</TouchableOpacity>

</View>
</View>




<View style={{paddingRight:15 }}>
<Title>Alcohol</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Alcohol')}>

<Image  style={{ width: 210, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={al}  />

</TouchableOpacity>

</View>
</View>




<View style={{paddingRight:15 }}>
<Title>Snacks</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Snacks')}>

<Image  style={{ width: 210, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={sna}  />

</TouchableOpacity>

</View>
</View>




<View style={{paddingRight:15 }}>
<Title>Spices,Sauces & Condiments</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Spices')}>

<Image  style={{ width: 210, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={spi}  />

</TouchableOpacity>

</View>
</View>




<View style={{paddingRight:15 }}>
<Title>Pantry,Canned & Dried items</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Pantry')}>

<Image  style={{ width: 210, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={pan}  />

</TouchableOpacity>

</View>
</View>




<View style={{paddingRight:15 }}>
<Title>Household essentials</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('House')}>

<Image  style={{ width: 210, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={hou}  />

</TouchableOpacity>

</View>
</View>





<View style={{paddingRight:15 }}>
<Title>Health & Nutrition</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Health')}>

<Image  style={{ width: 210, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={vit}  />

</TouchableOpacity>

</View>
</View>




<View style={{paddingRight:15 }}>
<Title>Kids & Babies</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Kids')}>

<Image  style={{ width: 210, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={ki}  />

</TouchableOpacity>

</View>
</View>












</ScrollView>









  </View>    



</ScrollView>


        

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
          alignItems: "flex-end",
          paddingLeft: 8,
          paddingTop: 12
      }
})
