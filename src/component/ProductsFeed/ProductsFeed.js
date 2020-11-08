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
  console.log("ALL PRODUCTS?", products);

  const cartProducts = useSelector(selectCartProducts);
  const arrayOfCartIds = cartProducts.map(p => {
    return parseInt(p.productId)
  })

  const filteredProducts = products.filter(p => {
  return arrayOfCartIds.includes(p.id)
  })

  filteredProducts.map(p => {
    return cartProducts.find(c => c.productId == p.id).quantity
  })

  function handleClick(event) {
    console.log("EVENT", event.target.value);
    dispatch(addProduct(event.target.value));
  }

  function handleClickRemove(event) {
    dispatch(removeProduct(event.target.value));
  }


  return (
    <div>
      {products.map((product) => {
        return (
          <ul key={product.id}>
            <Link to={`/product/${product.id}`}>
              <li>{product.name}</li>
            </Link>
            <img src={product.imageUrl} height="200px"></img>

            {(arrayOfCartIds.includes(product.id)) ? 
            <p>{cartProducts.find(c => c.productId == product.id).quantity} in cart</p> :
            <p>add to cart</p>
            }

            <button value={product.id} onClick={handleClick}>
              +
            </button>

            {(arrayOfCartIds.includes(product.id)) ? 
            <button value={product.id} onClick={handleClickRemove}>
           -
          </button> :
          null
            }
            
          </ul>
        );
      })}
    </div>
  );
}
