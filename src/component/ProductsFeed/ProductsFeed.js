import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productFeed/actions";
import { selectProducts } from "../../store/productFeed/selectors";
import { addProduct } from "../../store/cart/actions"
import { Link } from "react-router-dom";

export default function ProductsFeed() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector(selectProducts);
  console.log("WHAT?", products);

  function handleClick(event){
    console.log("EVENT", event.target.value)
    dispatch(addProduct(event.target.value))
  }

  return (
    <div>
      {products.map((product) => {
        return (
          <ul>
            <Link to={`/product/${product.id}`}>
              <li>{product.name}</li>
            </Link>
            <img src={product.imageUrl} height="200px"></img>
            <button value={product.id} onClick={handleClick}>TODO: CART</button>
          </ul>
        );
      })}
    </div>
  );
}
