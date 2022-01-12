// resolvers have 3 params parent, args, context

const Query = {
  hello: () => {
    return "Wrold";
  },
  fruits: () => {
    return [
      "banana",
      "papaya",
      "grape",
      "pinneaple",
      "strawberry",
      "mango",
      "watermelon",
    ];
  },
  lengthOfDataFruits: () => {
    return 7;
  },
  pricePerFruits: () => {
    return 20.5;
  },
  isExpensive: () => {
    return false;
  },

  //return single product
  product: (parents, args, { products }) => {
    const { id } = args;

    return products.find((product) => product.id === id);
  },
  //return all product
  products: (parent, { filter }, { products }) => {
    let filteredProducts = products;

    if (filter) {
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }
    }

    return filteredProducts;
  },
  categories: (parent, args, { categories }) => categories,

  category: (parent, args, { categories }) => {
    const { id } = args;

    return categories.find((category) => category.id === id);
  },
};

export default Query;
