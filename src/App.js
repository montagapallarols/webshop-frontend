import './App.css';
import { Route, Switch } from "react-router";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Navbar from "./component/Navbar";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path = "/" component={HomePage}></Route>
      <Route exact path = "/product/:id" component={ProductPage}></Route>
      <Route exact path = "/order" component={CartPage}></Route>
      <Route exact path = "/login" component={LoginPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
