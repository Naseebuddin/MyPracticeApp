import { createSlice } from "@reduxjs/toolkit";
 const initialState={
    myStateStatus:false,
}
;
const stateChanging = createSlice ({
    name:'stateChanging',
  initialState,
    reducers:{
        getLoginStatus:(state,action)=>{
            state.myStateStatus = action.payload;
    
           
        }
    }
})
export const {getLoginStatus} =stateChanging.actions;
export default stateChanging.reducer;