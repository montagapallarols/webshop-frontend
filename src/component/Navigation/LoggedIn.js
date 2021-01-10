import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/auth/actions";
import { Button, Nav } from "react-bootstrap";
import { selectUser, selectToken } from "../../store/auth/selectors";
import { useHistory } from "react-router-dom";
import Cart from "./Cart";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  const userNameArray = user?.fullName?.split(" ")
  const userFirstName = userNameArray ? userNameArray[0] : null
  const token = useSelector(selectToken)

  useEffect(() => {
    if (!token) {
      history.push("/");
    }
  }, [token, history]);
 
  return (
    <>
      <Nav.Item style={{ padding: ".5rem" }}>{userFirstName}</Nav.Item>
      <Cart/>
      <Button variant="info" onClick={() => dispatch(logOut())}>Logout</Button>

    </>
  );
}
