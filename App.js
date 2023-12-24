import React, { useEffect, useRef } from "react";
import Routes from "./src/Navigation/Routes";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { Search } from "./src/Screens";
import { Text, View } from "react-native";
import Ordertocontinue from "./src/Screens/Ordetocontinue/Ordertocontinue";
import AsyncStorage from "@react-native-async-storage/async-storage";
import stateChanging, { getLoginStatus } from "./src/redux/reducer/stateChanging";
import actions from "./src/redux/actions/actions";
function App() {

    useEffect(() => {
        (async () => {
            try {
                const value = await AsyncStorage.getItem('key');
                if (value !== null) {
                    actions.appStateStatusAction(value)
                }
            } catch (e) {
                // error reading value
            }
        })();
    }, [])

    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}
export default App;