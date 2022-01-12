// relating data one to many
const Category = {
  products: (parent, args, { products }) => {
    const { id } = parent;

    return products.filter((product) => product.categoryId === id);
  },
};

export default Category;
