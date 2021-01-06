import axios from "axios";
import { apiUrl } from "../../config/constants";

export function productsList(data) {
  return {
    type: "PRODUCTS_FETCHED",
    payload: data,
  };
}

export function fetchProducts() {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/products`);
    console.log("Products response", response.data.categories);
    dispatch(productsList(response.data.categories));
  };
}
