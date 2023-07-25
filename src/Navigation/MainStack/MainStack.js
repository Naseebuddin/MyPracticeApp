import { Addproducts, Baseket, Detailitemscreen, Ordertocontinue } from "../../Screens/index";
import navigationStrig from "../../constants/navigationStrig";
import TabRoutes from "../TabRoutes";
const MainStack = (Stack) => {
    return (
        <>
            <Stack.Screen name={navigationStrig.TABROUTES} component={TabRoutes} />
            <Stack.Screen name={navigationStrig.ORDERTOCONTINUE} component={Ordertocontinue}/>
            <Stack.Screen name={navigationStrig.DETAILITEMSCREEN} component={Detailitemscreen}/>
              <Stack.Screen name={navigationStrig.ADDPRODUCTS} component={Addproducts}/>
                </>
    )
}
export default MainStack;