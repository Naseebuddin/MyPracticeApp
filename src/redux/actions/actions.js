import { deleteUserData, toggleTodo, userData } from "../reducer/counterReducerSlice";
import { decrement, increment } from "../reducer/myCountItem";
import { GrandTotal, addItemToCart, clearCart, deletTheCartItem } from "../reducer/mycartItem";
import { getLoginStatus } from "../reducer/stateChanging";
import store from "../store";

const { dispatch } = store;
const addMyActionUserData = (state) => {
    dispatch(userData(state));
};
const deleteMyActionUserData = (state) => {
    dispatch(deleteUserData(state))
};
const clickTOAddItemTocart = (state) => {
    dispatch(addItemToCart(state));
};
const clickToDeleltItemOfCart = (state) => {
    dispatch(deletTheCartItem(state))
};
const clearMyAllCartItem = (state) => {
    dispatch(clearCart(state))
}
const grandTotalOFAllItem = (state) => {
    dispatch(GrandTotal(state));
}
const appStateStatusAction = (state) =>{
    dispatch(getLoginStatus(state))
}


//  const getProducts = () => {
//     return new Promise((resolve, reject) => {
//         axios.get(API_PODUCTS_URL).then((res) => {
//             resolve(res)
//         }).catch(err => {
//             reject(err)
//         })
//     })
// }

export default {
    addMyActionUserData,
    deleteMyActionUserData,
    clickToDeleltItemOfCart,
    clickTOAddItemTocart,
    clearMyAllCartItem,
    grandTotalOFAllItem,
    appStateStatusAction,
    // getProducts
}