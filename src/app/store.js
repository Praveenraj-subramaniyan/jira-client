import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import loginReducer from "../reducers/loginReducer";
import issueReducer from "../reducers/issueReducer";



const rootReducer = combineReducers({
  loginReducer: loginReducer,
  issueReducer:issueReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
