import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrig from '../constants/navigationStrig';
import React from 'react';
import { Everyday, Home, Luxe } from '../Screens';
import  Fwd  from "./../Screens/Fwd/Fwd";
// import * as screens from "../Screens/index"
import Profile from '../Screens/Profile/Profiel';
import { Image, StyleSheet, Text } from 'react-native';
import imagePath from '../constants/imagePath';
import { moderateScale, scale } from 'react-native-size-matters';
import color from '../styles/color';

import HomeStack from './HomeStack/HomeStack';
const TabRoutes = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        }}>
            <Tab.Screen
                screenOptions={{
                    headerShown: false
                }}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (<Image style={styles.iconeStyle}
                            source={focused ? imagePath.mmm : imagePath.m} />)
                    }
                }}
                name={navigationStrig.HOME} component={HomeStack} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ ...styles.iconeStyle, tintColor: focused ? color.mREd : color.darkBlack, }} source={imagePath.rulers} />
                        )
                    }
                }}
                name={navigationStrig.FWD} component={Fwd} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ ...styles.iconeStyle, tintColor: focused ? color.mREd : color.darkBlack }} source={imagePath.tshirt} />
                        )
                    }
                }}
                name={navigationStrig.EVERYDAY} component={Everyday} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <Image style={{ ...styles.iconeStyle, tintColor: focused ? color.mREd : color.darkBlack }} source={imagePath.diamond} />
                    )
                }
            }} name={navigationStrig.LUXE} component={Luxe} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                resizeMode='stretch'
                                style={{ ...styles.iconeStyle, tintColor: focused ? color.mREd : color.darkBlack }}
                                source={imagePath.user} />
                        )
                    }
                }}
                name={navigationStrig.PROFILE} component={Profile} />
        </Tab.Navigator>
    )
}
export default TabRoutes;
const styles = StyleSheet.create({
    iconeStyle: {
        height: moderateScale(26),
        width: scale(26),


    }
})