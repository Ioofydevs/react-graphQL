import { ApolloServer } from "apollo-server";
import { typeDefs } from "./src/schema/schema.js";
import Query from "./src/services/Query.js";
import Category from "./src/services/Category.js";
import Product from "./src/services/Product.js";

// dummy database
import products from "./src/data/products.data.js";
import categories from "./src/data/categories.data.js";
import reviews from "./src/data/reviews.data.js";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
  context: {
    products,
    categories,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is running up at ${url}`);
});
