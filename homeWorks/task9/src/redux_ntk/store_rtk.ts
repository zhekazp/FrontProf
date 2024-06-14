import { configureStore } from "@reduxjs/toolkit";
import librarySlice from "./librarySlice";

const store_rtk = configureStore({
    reducer:{
        library: librarySlice.reducer
}});

export default store_rtk;

export type RootState = ReturnType<typeof store_rtk.getState>;