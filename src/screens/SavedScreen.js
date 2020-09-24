import React from "react"
import { View, Text, StyleSheet,ImageBackground, Image, FlatList} from "react-native"
import { Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome5"
import {Title, Left} from "native-base"
import data from "./data"
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';










const Form = ({name, description, price}) => (
  
  <View>



  <ImageBackground

  
  

  source={require('../img/yie.jpg')} 
     imageStyle={{borderRadius:12}}





  style={{
    height: 187,
    width: 186,
    position: 'relative', // because it's parent
    marginBottom:8,
    marginTop:19,
    marginRight:7,
    marginLeft:4,
    top: 2,
    left: 2
  }}
>


  <Text    
    style={{
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      bottom: 0, // position where you want
      left: 0,
      marginBottom:55,
      marginLeft:10,
      fontSize: 20
    }}
  >
    {name}
  </Text>

<Text style={{bottom:0, left:0,position:"absolute", fontSize:15,marginBottom:35, marginLeft:10,color:"white"}}>${price}</Text>


  <Text style={{bottom:0, left:0,position: "absolute", marginLeft:10, color:"white", fontSize:12, marginBottom:5}}>
  
  {description}  </Text>



  <Button type="clear"    
   style={{top:0, paddingLeft:152, right:0, marginTop:2, }}
icon ={  <FontAwesome name="remove"  size={17} color="white"     />}
/>


<Button type="clear"    
   style={{top:0, paddingLeft:150, right:0, marginTop:5}}
icon ={  <Feather name="shopping-bag"  size={17} color="white"     />}
/>





</ImageBackground>




</View>

  );





  const renderItem= ({ item })=> (
    <Form
     name={item.name} 
     description={item.description}
     image={item.image}
     price={item.price}
    
     />
    
     
)










const mapDispatchToProps = (dispatch)=>{
  return{
    addItem
  }
}







export default function SavedScreen ({navigation}) {
    return (

        <View style={styles.container} >
 

                 
             <ImageBackground
             
             source={require('../img/die.jpg')}
             imageStyle={{borderRadius:0}}
          style={{
            height: 621,
            width: 375,
            position: 'relative', // because it's parent
            
            top: 0,
            
          }}
        >
             
             
             
             
            





            <Button style={styles.sitch} 
            type="clear"
            icon={
               <Icon
                name= "bars"
                size= {20}
                color= "black"
                />
            }
            
            onPress={() => navigation.openDrawer()} />    


<Title
style={{fontSize:35, color:"white", paddingLeft: 15, textAlign:"left"}}

>Saved Items</Title>






<View style={{ marginBottom:20, paddingBottom:80, paddingLeft:20}}>
  
    <FlatList  style={{marginBottom:13}}  

data={data}
 renderItem={renderItem}

keyExtractor={item=>item.id}
 />


  






</View>







</ImageBackground>
        </View>

        
    )
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 0,
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
          paddingTop:25,
          paddingRight:12
          
      },

      



})
