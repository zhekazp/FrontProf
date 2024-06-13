import { combineReducers, legacy_createStore } from "redux";



import libraryReducer from "./libraryReducer";
const store = legacy_createStore(combineReducers(
    {
      library:  libraryReducer,
        
    }
));

export default store;
export type RootState = ReturnType<typeof store.getState>;




