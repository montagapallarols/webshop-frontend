import { combineReducers } from "redux";
import productsReducer from "./productFeed/reducer";

const rootReducer = combineReducers({
  product: productsReducer,
});

export default rootReducer;
