import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectCartProducts } from "./../store/cart/selectors";
import { selectProducts } from "../store/productFeed/selectors";
import { addProduct, removeProduct } from '../store/cart/actions';
import { Link } from "react-router-dom";
import { emptyCart } from "../store/cart/actions";

export default function CartPage() {
    const cartProducts = useSelector(selectCartProducts)
    const allProducts = useSelector(selectProducts);
    const dispatch = useDispatch()

    console.log("Cart PRODUCTS", cartProducts)

    const arrayOfCartIds = cartProducts.map(p => {
        return parseInt(p.productId)
    })
    console.log("Array of Cart ids", arrayOfCartIds)

    const filteredProducts = allProducts.filter(p => {
        return arrayOfCartIds.includes(p.id)
    })
    console.log("Filtered PRODUCTS", filteredProducts)

    function handleClick(event){
        dispatch(addProduct(event.target.value))
    }

    function handleClickRemove(event){
        dispatch(removeProduct(event.target.value))
    }
   
    function handleEmpty(event){
        dispatch(emptyCart(event.target.value))
    }

    return (
        <div>
            <h1>Your shopping cart</h1>
            {filteredProducts.map(p => {
                return <div key={p.id}>
                    <h3>{p.name}</h3>
                    <img src={p.imageUrl} height="100px"></img>
                <p>
                    {cartProducts.find(c => c.productId == p.id).quantity} in cart
                </p>
                <button value={p.id} onClick={handleClick}>
              +
            </button>
            <button value={p.id} onClick={handleClickRemove}>
              -
            </button>
                </div>
            })}
            {(cartProducts.length !== 0) ? 
            <div>
                <button onClick={handleEmpty}>Empty cart</button>
                <Link to="/login"><button>Buy</button></Link>
            </div>
                :
               null
                 }
            
        </div>
    )
}
