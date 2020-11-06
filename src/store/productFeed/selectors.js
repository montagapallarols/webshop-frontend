export function selectProducts(reduxStore) {
  return reduxStore.product.categories.flatMap((category) => {
    return category.products;
  });
}
