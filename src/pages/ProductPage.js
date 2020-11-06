import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../store/productFeed/actions";
import { selectProducts } from "../store/productFeed/selectors";
import { selectProduct } from "../store/productPage/selectors";

export default function ProductPage() {
  const dispatch = useDispatch();
  const ROUTE_PARAMS = useParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const allProducts = useSelector(selectProducts);
  console.log("allProducts", allProducts);
  const thisProduct = allProducts.find(
    (product) => parseInt(product.id) === parseInt(ROUTE_PARAMS.id)
  );
  console.log("thisProduct", thisProduct);

  return (
    <div>
      <h1>Product Page</h1>
      <h2>Name: {thisProduct.name}</h2>
      <img src={thisProduct.imageUrl} height="200px" />
      <p>Description: Lorem ipsum etc.</p>
    </div>
  );
}
