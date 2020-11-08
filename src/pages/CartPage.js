import React from "react";
import { useSelector } from "react-redux";
import { selectCartProducts } from "./../store/cart/selectors";
import { selectProducts } from "../store/productFeed/selectors";

export default function CartPage() {
  const cartProducts = useSelector(selectCartProducts);
  const allProducts = useSelector(selectProducts);

  console.log("Cart PRODUCTS", cartProducts);

  const arrayOfCartIds = cartProducts.map((p) => {
    return parseInt(p.productId);
  });
  console.log("Array of Cart ids", arrayOfCartIds);

  const filteredProducts = allProducts.filter((p) => {
    return arrayOfCartIds.includes(p.id);
  });
  console.log("Filtered PRODUCTS", filteredProducts);

  return (
    <div>
      <h1>Your shopping cart</h1>
      {filteredProducts.map((p) => {
        return (
          <div key={p.id}>
            <h3>{p.name}</h3>
            <img src={p.imageUrl} height="200px"></img>
            <p>
              {
                cartProducts.find((c) => parseInt(c.productId) === p.id)
                  .quantity
              }
            </p>
          </div>
        );
      })}
    </div>
  );
}
