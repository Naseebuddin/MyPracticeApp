import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './reducer/counterReducerSlice'
import myCountItem from "./reducer/myCountItem";
import mycartItem from "./reducer/mycartItem";
import stateChanging from "./reducer/stateChanging";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        incrementAndDecrement:myCountItem,
        cartItem:mycartItem,
        appStatus:stateChanging
    
    
    },
})
export default store;