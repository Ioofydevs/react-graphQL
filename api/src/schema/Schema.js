import { gql } from "apollo-server";

// ScallarTypes : String, Int, Float, Boolean, ID!

export const typeDefs = gql`
  type Query {
    hello: String
    fruits: [String]
    lengthOfDataFruits: Int
    pricePerFruits: Float
    isExpensive: Boolean
    products(filter: ProductsFilterInput): [Product!]!
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
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!

    # relating data one to many
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    title: String!
    date: String!
    customer: String!
    comment: String!
    rating: Float!
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Float
  }
`;
