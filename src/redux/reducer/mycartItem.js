import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
const initialState = {
    cartItems: []
}
const mycartitem = createSlice({
    name: 'myCartItem',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            // console.log(state.cartItems.includes(action.payload), state.cartItems, "action?.payload");
            const found = state.cartItems.some(el => el.id === action.payload?.id);
            if (!found) {
                state.cartItems.push(action.payload)
            }

        },
        deletTheCartItem: (state, action) => {
            state.cartItems.splice(action.payload, 1)
        },
        incrementCartItemQuantity: (state, action) => {
            const itemId = action.payload;
            const itemToIncrement = state.cartItems.find(item => item.id === itemId);
            if (itemToIncrement) {
                itemToIncrement.quantity++;
            }
        },
        decrementCartItemQuantity: (state, action) => {
            const itemId = action.payload;
            const itemDecrement = state.cartItems.find(item => item.id === itemId)
            if (itemDecrement) {
                if (itemDecrement.quantity > 1) {
                    itemDecrement.quantity--;
                }
            }
        },
        incrementByAmountCartItem: (state, action) => {
            const { selectedQuantity, id } = action.payload;
            console.log(action.payload,"action.payload for quantity");
            const itemToIncrement = state.cartItems.find(item => item.id == id);
            console.log(itemToIncrement,"itemToIncrement=>>>>");
            if (itemToIncrement) {
                itemToIncrement.quantity = selectedQuantity;
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
        }
    }
})
export const { addItemToCart,
    deletTheCartItem, clearCart,
    decrementCartItemQuantity,
    incrementCartItemQuantity,
    incrementByAmountCartItem
} = mycartitem.actions;
export default mycartitem.reducer;