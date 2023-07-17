import { deleteUserData, toggleTodo, userData } from "../reducer/counterReducerSlice";
import { decrement, increment } from "../reducer/myCountItem";
import { GrandTotal, addItemToCart, clearCart, deletTheCartItem } from "../reducer/mycartItem";
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
const clearMyAllCartItem = (state) =>{
    dispatch(clearCart(state))
}
const grandTotalOFAllItem = (state)=>{
    dispatch(GrandTotal(state));
}
export default {
    addMyActionUserData,
    deleteMyActionUserData,
    clickToDeleltItemOfCart,
    clickTOAddItemTocart,
    clearMyAllCartItem,
    grandTotalOFAllItem
}