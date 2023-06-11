import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from "./MainStack/MainStack";
const Routes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {true ? MainStack(Stack) : null}
            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default Routes;