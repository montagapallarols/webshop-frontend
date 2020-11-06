import './App.css';
import { Route, Switch } from "react-router";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="App">
      <h1>Awesome webshop</h1>
      <Switch>
      <Route exact path = "/" component={HomePage}></Route>
      <Route exact path = "/product/:id" component={ProductPage}></Route>
      <Route exact path = "/order" component={CartPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
