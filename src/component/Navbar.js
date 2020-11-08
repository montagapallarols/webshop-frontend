import React from 'react'
import { useSelector } from "react-redux"
import { selectCartProducts } from "../store/cart/selectors";
import { NavLink } from "react-router-dom";

export default function Toolbar() {
    const cartProducts = useSelector(selectCartProducts)

    const newArray = cartProducts.map(p => {
        return p.quantity
    })
    console.log("array of quantities", newArray)

    let sum = newArray.reduce(function(a, b){
        return a + b;
    }, 0);

    return (
        <div>
            <NavLink  exact to="/"
            activeStyle={{
            fontWeight: "bold"
            }}>Home</NavLink>{"  "}

            <NavLink  exact to="/login"
            activeStyle={{
            fontWeight: "bold"
            }}>Login</NavLink>{"  "}

            <NavLink  exact to="/order"
            activeStyle={{
            fontWeight: "bold"
            }}>Cart</NavLink>{" "}

            <p>{sum} products in cart</p>
        </div>
    )
}
