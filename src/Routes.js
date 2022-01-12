import Launches from './Pages/Launches'
import Rockets from './Pages/Rockets'
import Roadster from './Pages/Roadster'
import React from 'react'
import { createDrawerNavigator, DrawerItems } from 'react-navigation'
import { ScrollView, SafeAreaView, Dimensions, StyleSheet, View, Text, Image } from 'react-native'

const CustomDrawerNavigation = (props) => (
    <SafeAreaView style={{flex: 1}}>
        <View style={{height:150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 200, height: 120}} source={require('./Images/spacex.png')}></Image>
        </View>
        <ScrollView>
            <DrawerItems {...props}>
            </DrawerItems>
        </ScrollView>
    </SafeAreaView>
)

const Routes = createDrawerNavigator({
    Launches: Launches,
    Rockets: Rockets,
    Roadster: Roadster,
}, {
    contentComponent: CustomDrawerNavigation,
    contentOptions: {
        activeTintColor: '#28286d',
    }
});



export default Routes;