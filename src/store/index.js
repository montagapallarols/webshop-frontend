import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import ReduxThunk from "redux-thunk";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: 'root',
  storage
  // whitelist: ["cart"]
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

export default () => {
  let store = createStore(persistedReducer, enhancer)
  let persistor = persistStore(store)
  return { store, persistor }
}





// import { createStore, applyMiddleware, compose } from "redux";
// import { persistStore, persistReducer } from 'redux-persist'
// import ReduxThunk from "redux-thunk";
// import rootReducer from "./rootReducer";

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
//   ? window.__REDUX_DEVTOOLS_EXTENSION__()
//   : (x) => x;

// const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

// const store = createStore(rootReducer, enhancer);


// export default store;


