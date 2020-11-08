export function addProduct(id) {
  return {
    type: "ADD_PRODUCT",
    payload: id,
  };
}

export function removeProduct(id) {
  return {
    type: "REMOVE_PRODUCT",
    payload: id,
  };
}

export function emptyCart(id) {
  return {
    type: "EMPTY_CART",
    payload: id,
  }
}
