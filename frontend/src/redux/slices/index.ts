import {combineReducers} from "@reduxjs/toolkit";
import {authSlice} from "./signInSlice";
import {themeSlice} from "./themeSlice";

const rootReducer = combineReducers({
  authSlice: authSlice.reducer,
  themeSlice: themeSlice.reducer,
})

export default rootReducer;
