import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./rootReducer";

const devTools = window.REDUX_DEVTOOLS_EXTENSION
  ? window.REDUX_DEVTOOLS_EXTENSION()
  : (x) => x;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

const store = createStore(rootReducer, enhancer);

export default store;
