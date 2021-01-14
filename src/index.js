import React from "react";
import { Provider } from "react-redux";
import stores from "./store";
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const { store, persistor } = stores()


ReactDOM.render(
  <Router>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    </Provider>
  </Router>,

  document.getElementById("root")
);
