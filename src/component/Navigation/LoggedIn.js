import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/auth/actions";
import { Button, Nav } from "react-bootstrap";
import { selectUser, selectToken } from "../../store/auth/selectors";
import NavbarItem from "./NavbarItem";
import { useHistory } from "react-router-dom";
import { selectCartProducts } from "../../store/cart/selectors";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Cart from "./Cart";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  const userNameArray = user.fullName.split(" ")
  const token = useSelector(selectToken)

  useEffect(() => {
    if (!token) {
      history.push("/");
    }
  }, [token, history]);
 
  return (
    <>
      <Nav.Item style={{ padding: ".5rem" }}>{userNameArray[0]}</Nav.Item>
      <Cart/>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>

    </>
  );
}
