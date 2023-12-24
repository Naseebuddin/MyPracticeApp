import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Baseket, Home, Notifications, Search, Weshlist } from '../../Screens';
import navigationStrig from '../../constants/navigationStrig';
const HomeStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={navigationStrig.HOMESTACK} component={Home} />
            <Stack.Screen name={navigationStrig.SEARCH} component={Search} />
            {/* <Stack.Screen name={navigationStrig.BASEKET} component={Baseket} /> */}
            <Stack.Screen name={navigationStrig.NOTIFICATIONS} component={Notifications} />
            <Stack.Screen name={navigationStrig.WESHLIST} component={Weshlist} />
        </Stack.Navigator>
    )
}
export default HomeStack;