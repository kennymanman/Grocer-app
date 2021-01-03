import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigation from './src/Navigation/AppNavigator';
import {CartProvider} from "./src/screens/CartContext"
import { MenuProvider } from 'react-native-popup-menu'



export default function App() {


  return (
    




<MenuProvider>
<CartProvider>
    <PaperProvider>
      <NavigationContainer>
        
        <MainTabNavigation />
        
        

      </NavigationContainer>
    </PaperProvider>
    </CartProvider>
 </MenuProvider>   
    
    
  );
}