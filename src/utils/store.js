import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import Chatslice from "./Chatslice";



const store = configureStore({
    reducer: {
        app:appSlice, 
        search:searchSlice,
        chat:Chatslice,
    }
})

export default store