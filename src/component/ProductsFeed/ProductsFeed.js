import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/product/actions";

export default function ProductsFeed() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <div>
      <h1>I am Feed</h1>
    </div>
  );
}
