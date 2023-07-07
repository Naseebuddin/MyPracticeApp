import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: 'TodoData',
    initialState:[],
    reducers: {
        userData: (state, action) => {
            state.push(action.payload);  
        },
        deleteUserData:(state, action)=>{
            state.splice(action.payload,1) 
        },
    }
})
export const {userData,deleteUserData} = counterSlice.actions;
export default counterSlice.reducer;