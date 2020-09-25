import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigation from './src/Navigation/AppNavigator';
//import DrawerContent from "./src/Navigation/DrawerContent"
import {CartProvider} from "./src/screens/CartContext"


export default function App() {


  return (
    




<CartProvider>

    <PaperProvider>
      <NavigationContainer>
        
        <MainTabNavigation />
        
        

      </NavigationContainer>
    </PaperProvider>
    
    </CartProvider>
    
  );
}