import React, { useRef } from "react";
import Routes from "./src/Navigation/Routes";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { Search } from "./src/Screens";
import { Text ,View} from "react-native";
import Ordertocontinue from "./src/Screens/Ordetocontinue/Ordertocontinue";
function App() {
     return(
    <Provider store={store}>
        <Routes/>
            </Provider>
     )
}
export default App;