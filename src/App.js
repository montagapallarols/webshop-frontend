import React, { useEffect } from "react";
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import MessageBox from "../src/component/MessageBox";
import { selectMessage } from './store/appState/selectors';
import Navigation from "../src/component/Navigation";
import { getUserWithStoredToken } from "./store/auth/actions";
import SignupPage from "./pages/SignupPage";
import ProductNav from "../src/component/ProductNav";

function App() {
  const dispatch = useDispatch()
  const message = useSelector(selectMessage)
  const messageText = message?.text

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation/>
      <MessageBox/>
      <ProductNav/>
      <Switch>
      <Route exact path = "/" component={HomePage}></Route>
      <Route exact path = "/product/:id" component={ProductPage}></Route>
      <Route exact path = "/order" component={CartPage}></Route>
      <Route exact path = "/login" component={LoginPage}></Route>
      <Route exact path = "/signup" component={SignupPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
