import { ApolloServer, gql } from "apollo-server";
import { products } from "./src/data/products.data.js";

// ScallarTypes : String, Int, Float, Boolean, ID!

const typeDefs = gql`
  type Query {
    hello: String
    fruits: [String]
    lengthOfDataFruits: Int
    pricePerFruits: Float
    isExpensive: Boolean
    products: [Product!]!
    # return single product
    product(name: ID!): Product
  }

  type Product {
    id: String!
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }
`;

// resolvers have 3 params parent, args, context

const resolvers = {
  Query: {
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
    product: (parents, args, context) => {
      const productName = args.name;

      const product = products.find((product) => product.name === productName);

      if (!product) return null;

      return product;
    },
    products: () => products,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
