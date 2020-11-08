import { combineReducers } from "redux";
import productsReducer from "./productFeed/reducer";
import cartReducer from "./cart/reducer";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
  product: productsReducer,
  cart: cartReducer,
  auth: authReducer
});

export default rootReducer;
