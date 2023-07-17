import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [],
    toThegrandTotal:"",
}
const mycartitem = createSlice({
    name: 'myCartItem',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const id  = action?.payload;
 // console.log(state.cartItems.includes(action.payload), state.cartItems, "action?.payload");
            const found = state.cartItems.some(el => el.id === action.payload?.id);
            if (!found) {
                state.cartItems.push(action.payload)
                const myGrandTotal = state?.cartItems?.reduce((total, item) => {
                    const quantity = item?.quantity;
                    const cost = item?.cost;
                    const itemTotal = quantity * cost;
                    return total + itemTotal;
                }, 0)
                state.toThegrandTotal =myGrandTotal;
                // console.log(state.toThegrandTotal, 'FirstItem>>>>>>',);  
            }
        },
        deletTheCartItem: (state, action) => {
            state.cartItems.splice(action.payload, 1)
            const id = action.payload;
            const myCartItems = state.cartItems.find(item => item.id === id );
            if(myCartItems)
            {
                myCartItems.quantity--;
            }
            // console.log(myCartItems,'>>>>>>myCartItems');

        },
        incrementCartItemQuantity: (state, action) => {
            const id = action.payload;
            const itemToIncrement = state.cartItems.find(item => item.id === id);
            if (itemToIncrement) {
                itemToIncrement.quantity++;
                // console.log(itemToIncrement,'itemToIncrement');
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
            const { selectedQuantity, id, } = action.payload;
            const itemToIncrement = state.cartItems.find(item => item.id == id);
            if (itemToIncrement) {
                itemToIncrement.quantity = selectedQuantity;
                const myGrandTotal = state.cartItems.reduce((total, item) => {
                    const quantity = item.quantity;
                    const cost = item.cost;
                    const itemTotal = quantity * cost;
                    return total + itemTotal;
                }, 0);
                state.toThegrandTotal =myGrandTotal;
                // console.log(state.toThegrandTotal, 'aaaaaaa',myGrandTotal,'>>>>>>>>>>0000');
            } 
        },
        incrementByAmountOfSize: (state, action) => {
            const { selectedSzie, id } = action.payload;
            const itemToIncrementSize = state.cartItems.find(item => item.id == id);
            if (itemToIncrementSize) {
                itemToIncrementSize.size = selectedSzie;
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.toThegrandTotal=0;
        }
    }
})
export const { addItemToCart,
    deletTheCartItem, clearCart,
    decrementCartItemQuantity,
    incrementCartItemQuantity,
    incrementByAmountCartItem,
    incrementByAmountOfSize,
    GrandTotal,
} = mycartitem.actions;
export default mycartitem.reducer;
