// First Step: Define our 'root reducer' (index.js) with how many reducers our store(reducer) gonna be
//Second Step: Initialize some reducers
// Third Step: This time we will start with the selectors because we already have some data in our store and we might as well display it in our app.

import { combineReducers, createStore } from "redux";
import userReducer from "./user/reducer";
import pizzasReducer from "./pizzas/reducer";
import restaurantsReducer from "./restaurants/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;
//Here is where we manage the global state.Allow us to take multiple reducers and combine them into one single `root reducer`
const store = createStore(
  combineReducers({
    user: userReducer,
    pizzas: pizzasReducer,
    restaurants: restaurantsReducer,
  }),
  enhancer
);

export default store;
