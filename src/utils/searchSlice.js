import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name:"search",
    initialState:{
  
    },
    reducers:{
        cashResults: (state,action) => {
            state = Object.assign(state,action.payload)
        }
    }
})


export const {cashResults} = searchSlice.actions;
export default searchSlice.reducer