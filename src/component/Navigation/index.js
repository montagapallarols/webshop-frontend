import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { selectToken } from "../../store/auth/selectors";
import Cart from "./Cart";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;


  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand as={NavLink} to="/">
        Greenshop
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          {loginLogoutControls}
       
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}