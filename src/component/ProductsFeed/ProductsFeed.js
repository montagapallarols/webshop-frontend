import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productFeed/actions";
import { selectProducts } from "../../store/productFeed/selectors";
import { Link } from "react-router-dom";

export default function ProductsFeed() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector(selectProducts);
  console.log("WHAT?", products);

  return (
    <div>
      {products.map((product) => {
        return (
          <ul>
            <Link to={`/product/${product.id}`}>
              <li>{product.name}</li>
            </Link>
            <img src={product.imageUrl} height="200px"></img>
            <button>TODO: CART</button>
          </ul>
        );
      })}
    </div>
  );
}
