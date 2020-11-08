import React from 'react'
import { useSelector } from "react-redux"
import { selectCartProducts } from "./../store/cart/selectors";
import { Link } from "react-router-dom";

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
            <p>{sum} products in cart</p>
            <Link to="/order">Go to cart</Link>
        </div>
    )
}
