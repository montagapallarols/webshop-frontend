import axios from "axios";

export function productsList(data) {
  return {
    type: "PRODUCTS_FETCHED",
    payload: data,
  };
}

export function fetchProducts() {
  return async function thunk(dispatch, getState) {
    const response = await axios.get("http://localhost:4000/products");
    console.log("Products response", response.data.categories);
    dispatch(productsList(response.data.categories));
  };
}
