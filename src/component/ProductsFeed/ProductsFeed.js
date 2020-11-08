import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productFeed/actions";
import { selectProducts } from "../../store/productFeed/selectors";
import { addProduct, removeProduct } from "../../store/cart/actions";
import { Link } from "react-router-dom";
import { selectCartProducts } from "../../store/cart/selectors";

export default function ProductsFeed() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector(selectProducts);
  console.log("WHAT?", products);

  const cartProducts = useSelector(selectCartProducts);

  function handleClick(event) {
    console.log("EVENT", event.target.value);
    dispatch(addProduct(event.target.value));
  }

  function handleClickRemove(event) {
    dispatch(removeProduct(event.target.value));
  }

  const TheThing = cartProducts.find((p) => p.productId === products.id);
  console.log("CartPro", cartProducts.productId);
  console.log("THING", TheThing);

  const productInCart = products.find((p) => cartProducts.includes(p.id));
  console.log("productInCart", productInCart);

  return (
    <div>
      {products.map((product) => {
        return (
          <ul>
            <Link to={`/product/${product.id}`}>
              <li>{product.name}</li>
            </Link>
            <img src={product.imageUrl} height="200px"></img>
            <button value={product.id} onClick={handleClick}>
              ADD TO CART
            </button>
            <button value={product.id} onClick={handleClickRemove}>
              REMOVE FROM CART
            </button>
          </ul>
        );
      })}
    </div>
  );
}
