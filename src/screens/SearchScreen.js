import React from "react"
import { View, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from "react-native"
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
import Deals from "../rmg/Deals.png"

import {Title} from "native-base"
import { TextInput } from "react-native-paper";















export default function SearchScreen ({navigation}) {
    return (


        


        <View >

        {/*<Header  style={{marginTop:12  }} searchBar rounded   >

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


        </Header>*/}




        

        


        <ScrollView >

        <View style={{marginTop: 0,  
        backgroundColor: "white"}} >

  


<ImageBackground 
 source={require('../rmg/sag.jpg')}
 style={{width:379, height: 200}}
 imageStyle={{borderBottomRightRadius:70}}

>

<Button style={styles.sitch} 
            type="clear"
            icon={
               <Icon
                name= "bars"
                size= {21}
                color= "white"
                />
            }
            
            onPress={() => navigation.openDrawer()} />  




<Title style={{textAlign:"left", fontSize:39, paddingTop:0, paddingLeft:13, paddingBottom:10, color:"white"}}>Categories</Title>


<TextInput placeholder="     Search Groceries" 
style={{marginTop:0, padding:12, borderBottomRightRadius:30, borderTopRightRadius:30, width:345, height:30, backgroundColor:"white"}}
>
</TextInput>

<Feather name="search" size={19} color="gray" style={{position:"absolute", left:5, top:139}} />







      
</ImageBackground>





      {/*<Image  style={{ width: 346, height: 100, alignItems: "center", borderRadius: 20, marginBottom:35, marginLeft: 12, marginRight:25}} source={sig} />*/}









     {/* <ImageBackground
             
             source={require('../rmg/gina.jpg')}
             imageStyle={{borderRadius:0}}
          style={{
            height: 350,
            width: 375,
            position: 'relative', // because it's parent
            marginTop:75,
            top: 0,  
          }}
        >  */}






<View style={{ marginTop:70}}>

        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} >



<View style={{paddingRight:10, paddingLeft:19, paddingTop:10}}>


<Title style={{color:"black"}}>Deals & Offers</Title>
<View>
    <TouchableOpacity
     onPress={() => navigation.navigate ( "DealsScreen") }>

<Image  style={{ width: 220, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom:100}} source={Deals}  />

</TouchableOpacity>

</View>
</View>



<View style={{paddingRight:10, paddingTop:10 }}>

<Title style={{color:"black"}}>Fruits</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ("Fruits" ) } >

<Image  style={{ width: 220, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom:100}} source={pat}  />

</TouchableOpacity>

</View>
</View>












<View style={{paddingRight:10, paddingTop:10 }}>

<Title style={{color:"black"}}>Vegetables</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ("Vegetables" ) } >

<Image  style={{ width: 220, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom:100}} source={veg}  />

</TouchableOpacity>

</View>
</View>



<View style={{paddingRight:15, paddingTop:10 }}>
<Title style={{color:"black"}}>Meat & Seafood</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ( 'Meat')}>

<Image  style={{ width: 220, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={mea}  />

</TouchableOpacity>

</View>
</View>



<View style={{paddingRight:15, paddingTop:10 }}>
<Title  style={{color:"black"}}>Bread & Bakery</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Bread')}>

<Image  style={{ width: 220, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10 , marginBottom: 100}} source={brea}  />

</TouchableOpacity>

</View>
</View>



<View style={{paddingRight:15, paddingTop:10 }}>
<Title  style={{color:"black"}}>Dairy & Eggs</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Eggs')}>

<Image  style={{ width: 220, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={egg}  />

</TouchableOpacity>

</View>
</View>



<View style={{paddingRight:15, paddingTop:10 }}>
<Title  style={{color:"black"}}>Cereals</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Cereal')}>

<Image  style={{ width: 220, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={cere}  />

</TouchableOpacity>

</View>
</View>



<View style={{paddingRight:15, paddingTop:10 }}>
<Title  style={{color:"black"}}>Drinks</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Drinks')}>

<Image  style={{ width: 220, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={dri}  />

</TouchableOpacity>

</View>
</View>




<View style={{paddingRight:15, paddingTop:10 }}>
<Title  style={{color:"black"}}>Alcohol</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Alcohol')}>

<Image  style={{ width: 220, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={al}  />

</TouchableOpacity>

</View>
</View>




<View style={{paddingRight:15, paddingTop:10 }}>
<Title  style={{color:"black"}}>Snacks</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Snacks')}>

<Image  style={{ width: 220, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={sna}  />

</TouchableOpacity>

</View>
</View>




<View style={{paddingRight:15, paddingTop:10 }}>
<Title  style={{color:"black"}}>Spices,Sauces & Condiments</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Spices')}>

<Image  style={{ width: 220, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={spi}  />

</TouchableOpacity>

</View>
</View>




<View style={{paddingRight:15, paddingTop:10 }}>
<Title  style={{color:"black"}}>Pantry,Canned & Dried items</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Pantry')}>

<Image  style={{ width: 220, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={pan}  />

</TouchableOpacity>

</View>
</View>




<View style={{paddingRight:15, paddingTop:10 }}>
<Title  style={{color:"black"}}>Household essentials</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('House')}>

<Image  style={{ width: 220, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={hou}  />

</TouchableOpacity>

</View>
</View>





<View style={{paddingRight:15, paddingTop:10 }}>
<Title  style={{color:"black"}}>Health & Nutrition</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Health')}>

<Image  style={{ width: 220, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={vit}  />

</TouchableOpacity>

</View>
</View>




<View style={{paddingRight:15, paddingTop:10 }}>
<Title  style={{color:"black"}}>Kids & Babies</Title>
<View>
    <TouchableOpacity onPress={() =>navigation.navigate ('Kids')}>

<Image  style={{ width: 220, height: 270, alignItems: "center", borderRadius: 20, marginTop: 10, marginBottom: 100}} source={ki}  />

</TouchableOpacity>

</View>
</View>






</ScrollView>
</View>

{/*</ImageBackground>*/}










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

      sitch: {
          alignItems: "flex-end",
          paddingLeft: 8,
          paddingRight:19,
          paddingTop: 29
      }
})
