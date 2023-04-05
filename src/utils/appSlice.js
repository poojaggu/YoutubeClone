import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
       isMenuVisible:true,
    },
    reducers:{
         toggleMenu : (state) => {
            state.isMenuVisible = !state.isMenuVisible
         },

         disableMenu : (state) => {
            state.isMenuVisible = false;
         }
    }
})

export const {toggleMenu,disableMenu} = appSlice.actions

export default appSlice.reducer