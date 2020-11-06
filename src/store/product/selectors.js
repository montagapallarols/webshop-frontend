export function selectProducts(reduxStore) {
  const categories = reduxStore.product.products;
  return categories.map((cat) => {
    return cat.products.map((product) => {
      return product.name;
    });
  });
}
