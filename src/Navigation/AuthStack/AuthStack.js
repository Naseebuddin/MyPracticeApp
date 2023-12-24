import React from "react";
import navigationStrig from "../../constants/navigationStrig";
import { Loginscreen } from "../../Screens";
export default  function AuthStack (Stack){
    return(
        <>
        <Stack.Screen name={navigationStrig.LOGINSCREEN} component={Loginscreen} />
        </>
    )
}