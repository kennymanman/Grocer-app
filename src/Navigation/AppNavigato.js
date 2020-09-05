import React, { Fragment } from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DrawerContent from "./DrawerContent";
import BottomTabs from "./AppNavigator";





function AppNavigator() {
    return (
        <SafeAreaProvider>
          
          <BottomTabs />
        </SafeAreaProvider>
      );
    }
    

export default AppNavigator;




