import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/product/actions";
import { selectProducts } from "../../store/product/selectors";

export default function ProductsFeed() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector(selectProducts);
  console.log("WHAT?", products);


  return (
    <div>
     {
       products.map(product => {
         return <ul>
           <li>{product.name}</li>
           <img src={product.imageUrl} height="200px"></img>
         </ul>
       })
     }
    </div>
  );
}
