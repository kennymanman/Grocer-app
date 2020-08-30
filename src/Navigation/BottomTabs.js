import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
 import CartScreen from "../screens/CartScreen";
 import SavedScreen from "../screens/SavedScreen"
 import { MaterialCommunityIcons } from '@expo/vector-icons';
 import { FontAwesome } from '@expo/vector-icons';
 import { FontAwesome5 } from '@expo/vector-icons';
 import { Feather } from '@expo/vector-icons';


const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
  return (

 

    <Tab.Navigator
      initialRouteName="HomeScreen"
      shifting={true}
      sceneAnimationEnabled={false}
     
      barStyle={{ backgroundColor: '#ffffff' }}
      labeled={false}
        
    >




      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="tree" color={color} size={28} />
          ),
          
        }}
        

      />



      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{  
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" color={color} size={24} />
          ),
      }}
    />



      <Tab.Screen
        name="SavedScreen"
        component={SavedScreen}
        options={{ tabBarIcon: ({ color }) =>(
          <MaterialCommunityIcons name="heart-outline" size={27} color={color} />
        )
       
       }}     /> 





<Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ tabBarIcon: ({ color }) =>(
          <Feather name="shopping-bag" size={25} color={color} />
        )
       }}     /> 



    </Tab.Navigator>
    
  );
}




    