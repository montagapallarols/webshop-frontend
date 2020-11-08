const initialState = {
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const specificProduct = state.products.find(
        (p) => p.productId === action.payload
      );
      if (!specificProduct) {
        console.log("get here?");
        return {
          ...state,
          products: [
            ...state.products,
            {
              productId: action.payload,
              quantity: 1,
            },
          ],
        };
      } else {
        console.log("whatever");
        return {
          ...state,
          products: state.products.map((p) =>
            p.productId === action.payload
              ? {
                  ...p,
                  quantity: p.quantity + 1,
                }
              : p
          ),
        };
      }
    case "REMOVE_PRODUCT":
      const productInCart = state.products.find(
        (p) => p.productId === action.payload
      );
        if (!productInCart) {
          return {
            ...state
          }
        }

      if (productInCart.quantity > 1) {
        return {
          ...state,
          products: state.products.map((p) =>
            p.productId === action.payload
              ? {
                  ...p,
                  quantity: p.quantity - 1,
                }
              : p
          ),
        };
      } else if (productInCart.quantity === 1) {
        return {
          ...state,
          products: state.products.filter(
            (p) => p.productId !== action.payload
          ),
        };
      } 


    default:
      console.log("DEFAULT");
      return state;
  }
};
