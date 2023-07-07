import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    value:0
};
const myCountItem = createSlice({
    name:'CountingItem',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value +=1;
        },
        decrement:(state)=>{
            if(state.value >=1)
            {
            state.value -=1;
            }
        }
    } 
});
export const {increment,decrement} = myCountItem.actions;
export default myCountItem.reducer;
