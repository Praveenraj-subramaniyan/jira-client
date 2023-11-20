import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import loginReducer from "../reducers/loginReducer";



const rootReducer = combineReducers({
  loginReducer: loginReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
