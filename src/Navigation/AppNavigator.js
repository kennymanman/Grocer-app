import React, { Fragment } from 'react'
import { View, Text } from 'react-native'
import DrawerContent from "../Navigation/DrawerContent"
import BottomTabs from "../Navigation/BottomTabs"





function AppNavigator() {
    return (
        <View>
           <DrawerContent /> 
           <BottomTabs />
        </View>
    )
}

export default AppNavigator




