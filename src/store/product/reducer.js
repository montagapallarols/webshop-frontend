const initialState = { loading: true, products: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_START":
      return { ...state, loading: action.payload };

    case "PRODUCTS_FETCHED":
      return {
        loading: false,
        products: action.payload
      };

    default:
      return state;
  }
};
