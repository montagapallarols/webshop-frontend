import React, { useEffect, useState } from "react";
import './App.css';
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import MessageBox from "../src/component/MessageBox";
import Navigation from "../src/component/Navigation";
import { getUserWithStoredToken } from "./store/auth/actions";
import SignupPage from "./pages/SignupPage";
import ProductsNav from "./component/ProductsNav/ProductsNav";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);


  return (
    <div className="App">
      <Navigation/>
      <MessageBox/>
      <ProductsNav/>
      <Switch>
      <Route exact path = "/order" component={CartPage}></Route>
      <Route exact path = "/login" component={LoginPage}></Route>
      <Route exact path = "/signup" component={SignupPage}></Route>
      <Route path = "/:categoryName/product/:id" component={ProductPage}></Route>
      <Route path = "/:categoryName" component={HomePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
