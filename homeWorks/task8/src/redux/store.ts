import { combineReducers, legacy_createStore } from "redux";


import sandwichReducer from "./sandwichReducer";

const store = legacy_createStore(combineReducers(
    {sandwich : sandwichReducer
        
    }
));

export default store;
export type RootState = ReturnType<typeof store.getState>;




