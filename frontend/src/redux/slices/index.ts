import {combineReducers} from "@reduxjs/toolkit";
import {authSlice} from "./signInSlice";
import {themeSlice} from "./themeSlice";
import {chatsSlice} from "./chatsSlice";

const rootReducer = combineReducers({
  authSlice: authSlice.reducer,
  themeSlice: themeSlice.reducer,
  chatsSlice: chatsSlice.reducer,
})

export default rootReducer;
