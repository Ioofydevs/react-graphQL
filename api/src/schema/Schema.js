import { gql } from "apollo-server";

// ScallarTypes : String, Int, Float, Boolean, ID!

export const typeDefs = gql`
  type Query {
    hello: String
    fruits: [String]
    lengthOfDataFruits: Int
    pricePerFruits: Float
    isExpensive: Boolean
    products: [Product!]!
    # return single product
    product(id: ID!): Product
    # categories
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!

    # relating data many to one
    category: Category
  }

  type Category {
    id: ID!
    name: String!

    # relating data one to many
    products: [Product!]!
  }
`;
