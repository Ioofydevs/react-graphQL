// relating data one to many
const Category = {
  products: (parent, { filter }, { products }) => {
    const { id } = parent;

    const categoryProducts = products.filter(
      (product) => product.categoryId === id
    );

    let filteredCategoryProducts = categoryProducts;

    if (filter) {
      if (filter.onSale === true) {
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (product) => {
            return product.onSale;
          }
        );
      }
    }

    return filteredCategoryProducts;
  },
};

export default Category;
