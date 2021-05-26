// First Step: Define our 'root reducer' (index.js) with how many reducers our store(reducer) gonna be
//Second Step: Initialize some reducers
import { combineReducers, createStore } from "redux";
import userReducer from "./user/reducer";
import pizzasReducer from "./pizzas/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;
//Here is where we manage the global state.Allow us to take multiple reducers and combine them into one single `root reducer`
const store = createStore(
  combineReducers({
    user: userReducer,
    pizzas: pizzasReducer,
  }),
  enhancer
);

export default store;
