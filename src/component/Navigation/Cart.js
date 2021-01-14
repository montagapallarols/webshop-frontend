import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCartProducts } from "../../store/cart/selectors";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";


export default function Cart() {
    const cartProducts = useSelector(selectCartProducts)

    const newArray = cartProducts.map(p => {
        return p.quantity
    })
    

    let sum = newArray.reduce(function(a, b){
        return a + b;
    }, 0);

    return (
        <div style={{ paddingRight: "7rem" }}>
            <Link to="/order" style={{color: "black", textDecoration: "none"}}>
                <ShoppingCartIcon/>
                <span style={{ paddingLeft: "0.5rem" }}>{sum}</span>
            </Link>
        </div>
    )
}

