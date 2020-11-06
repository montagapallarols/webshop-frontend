import { combineReducers } from "redux";
import productsReducer from "../store/product/reducer";

const rootReducer = combineReducers({
  product: productsReducer,
});

export default rootReducer;
