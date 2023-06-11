import navigationStrig from "../../constants/navigationStrig";
import TabRoutes from "../TabRoutes";
const MainStack = (Stack) => {
    return (
        <>
            <Stack.Screen name={navigationStrig.TABROUTES} component={TabRoutes} />
        </>
    )
}
export default MainStack;