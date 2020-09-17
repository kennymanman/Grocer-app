import { Button } from 'native-base';
import React from 'react';
import { View,  ImageBackground, ScrollView, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Tile } from 'react-native-elements';
import { Title,Subtitle, Text, Icon } from 'native-base';







export default function ProductPage({navigation}) {
  return (




    






<ScrollView>




<View>
    <ScrollView
    
    horizontal={true}
  showsHorizontalScrollIndicator={false}
  scrollEventThrottle={200}
  decelerationRate="fast"
  pagingEnabled
    
  >








      <ImageBackground
      source={require('../img/rie.jpg')} 

    
      




      style={{
        height: 360,
        width: 395,
        position: 'relative', // because it's parent
        marginBottom:0,
        marginTop:0,
        marginRight:0,
        marginLeft:0,
        
      }} / > 






      
      <Image
      source={require('../img/jun.jpg')} 
      style={{
        height: 360,
        width: 399,
        position: 'relative', // because it's parent
        marginBottom:0,
        marginTop:0,
        marginRight:0,
        marginLeft:0,
        
      }} / > 
      



      <Image
      source={require('../img/die.jpg')} 
      style={{
        height: 360,
        width: 395,
        position: 'relative', // because it's parent
        marginBottom:0,
        marginTop:0,
        marginRight:0,
        marginLeft:0,
        
      }} / > 
      
      





    
</ScrollView>


</View>





<Title style={{textAlign:"left" , marginLeft:15, fontSize:30, marginTop:20}} >Banana</Title>







<Title style={{textAlign:"left" , marginLeft:15, fontSize:23, marginTop:9}} >$300</Title>

<Subtitle style={{textAlign:"left", marginLeft:15, fontSize:15, marginTop:10}}>Description</Subtitle>

<Text  style={{textAlign:"left", marginLeft:15, fontSize:13, marginTop:10, marginRight:15, paddingRight:15, paddingLeft:1}}>The tropical and subtropical palmlike plant that bears bananas, having very large leaves but lacking a woody trunk.</Text>





<View style={{flexDirection: "row", marginTop:50}}>

<Button rounded success style={{marginLeft:14, paddingLeft:5,paddingRight:5}}>
<Icon  Feather  name='heart' color="black" />

          </Button>

          
          <Button rounded success style={{marginLeft: 20, paddingLeft:69, paddingRight: 69}}>
            <Text>Add to Bag</Text>
          </Button>




</View>





</ScrollView>











     
  );
}
