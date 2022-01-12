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
  products: (parent, { filter }, { products, reviews }) => {
    let filteredProducts = products;

    if (filter) {
      const { avgRating, onSale } = filter;

      if (onSale) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }

      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;

          reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });

          const avgProductRating = sumRating / numberOfReviews;

          return avgProductRating >= avgRating;
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
