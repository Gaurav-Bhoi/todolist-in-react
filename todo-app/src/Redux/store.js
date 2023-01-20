import { configureStore, combineReducers } from "@reduxjs/toolkit";
import demoReducers from "./Reducers/demoReducers";
import homeReducers from "./Reducers/homeReducers";

const reducer = combineReducers({
  demoReducers,
  homeReducers,
});

const STORE = configureStore({
  reducer,
});

export default STORE;
