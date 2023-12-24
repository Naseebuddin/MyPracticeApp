import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from "./MainStack/MainStack";
import AuthStack from "./AuthStack/AuthStack";
import { useSelector } from "react-redux";
const Routes = () => {
    const Stack = createNativeStackNavigator();
    var myStateStatus = useSelector((state) => state.appStatus.myStateStatus)
    console.log(myStateStatus, 'myStateStatusmyStateStatus');
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {true ? MainStack(Stack) : AuthStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default Routes;