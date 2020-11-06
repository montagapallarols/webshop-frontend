const initialState = {  
    products: [{ 
        productId: null, 
        quantity: null
    }] 
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, 
        products: [{
            productId: action.payload.id,
            quantity: action.payload.quantity
        }]};

    default:
      return state;
  }
};