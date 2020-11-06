import { combineReducers } from "redux";
import productsReducer from "./productFeed/reducer";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({
  product: productsReducer,
  cart: cartReducer
});

export default rootReducer;
