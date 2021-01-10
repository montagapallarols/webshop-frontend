import React from "react";
import Cart from "./Cart";
import NavbarItem from "./NavbarItem";

export default function LoggedOut() {
  return (
    <>
      <NavbarItem path="/login" linkText="Login" />
      <Cart/>
    </>
  );
}