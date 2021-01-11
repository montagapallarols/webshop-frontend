import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../store/productFeed/actions";
import { selectProducts } from "../store/productFeed/selectors";
import { selectCartProducts } from "../store/cart/selectors";
import { addProduct, removeProduct } from "../store/cart/actions"
import { Button } from "react-bootstrap";

export default function ProductPage() {
  const dispatch = useDispatch();
  const ROUTE_PARAMS = useParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const allProducts = useSelector(selectProducts);
  console.log("allProducts", allProducts);
  const cartProducts = useSelector(selectCartProducts)
  const thisProduct = allProducts.find(
    (product) => product.id == ROUTE_PARAMS.id
  );
  console.log("THIS PRODUCT", thisProduct)
  const arrayOfCartIds = cartProducts.map(p => {
    return parseInt(p.productId)
  })

  function handleClick(event){
    dispatch(addProduct(event.target.value))
  }

  function handleClickRemove(event){
    dispatch(removeProduct(event.target.value))
  }

  return (
    <div>
      <h2>{thisProduct?.name}</h2>
      <img src={thisProduct?.imageUrl} height="200px" />

 <p>
      {
        arrayOfCartIds.includes(thisProduct?.id) ? 
        <span>
        <Button className="cart-button" variant="dark" value={thisProduct?.id} onClick={handleClickRemove}>-</Button>
        {cartProducts.find(c => c.productId == thisProduct?.id).quantity + " in cart"}
        <Button className="cart-button" variant="dark" value={thisProduct?.id} onClick={handleClick}>+</Button>
        </span>
        :
        <span>
          <Button className="cart-button" variant="dark" value={thisProduct?.id} onClick={handleClick}>+</Button>{" "}
          add to cart
          </span>
      }
      </p>
 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>
  );
}
