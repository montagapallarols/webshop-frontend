import React, { useEffect } from "react";
import "./ProductsFeed.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productFeed/actions";
import { selectProducts } from "../../store/productFeed/selectors";
import { addProduct, removeProduct } from "../../store/cart/actions";
import { Link } from "react-router-dom";
import { selectCartProducts } from "../../store/cart/selectors";
import { CardDeck, Card } from "react-bootstrap";

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
    <div className="product-list">
      {products?.map((product) => {
        return (
    
            <Card key={product.id} style={{ width: "18rem", margin: "30px", border: "none" }}>
              <Link to={`/product/${product.id}`}>
              <Card.Img className="product-image" variant="top" src={product.imageUrl} alt="product"/>
            </Link>
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
          <Card.Text>
          €{product.price}
          </Card.Text>
          {(arrayOfCartIds.includes(product.id)) ? 
            <p>{cartProducts.find(c => c.productId == product.id).quantity} in cart</p>
             :
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
          </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
