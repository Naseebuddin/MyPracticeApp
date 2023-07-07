import React, { useRef } from "react";
import Routes from "./src/Navigation/Routes";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { Search } from "./src/Screens";
function App() {
     return(
    <Provider store={store}>
        <Routes/>
            </Provider>
     )
}
export default App;