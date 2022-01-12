import { v4 as uuid } from "uuid";

const Mutation = {
  addCategory: (parents, { input }, { categories }) => {
    const { name } = input;

    const newCategory = {
      id: uuid(),
      name,
    };

    categories.push(newCategory);

    return newCategory;
  },
  addProduct: (parent, { input }, { products }) => {
    const { name, image, description, quantity, onSale, price, categoryId } =
      input;

    const newProduct = {
      id: uuid(),
      name,
      image,
      description,
      quantity,
      onSale,
      price,
      categoryId,
    };

    products.push(newProduct);

    return newProduct;
  },
  addReviews: (parent, { input }, { reviews }) => {
    const { title, date, customer, comment, rating, productId } = input;

    const newReviews = {
      id: uuid(),
      title,
      date,
      customer,
      comment,
      rating,
      productId,
    };

    reviews.push(newReviews);

    return newReviews;
  },
};

export default Mutation;
