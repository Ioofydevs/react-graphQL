const { ApolloServer, gql } = require("apollo-server");

// ScallarTypes : String, Int, Float, Boolean, ID!

const typeDefs = gql`
  type Query {
    hello: String
    fruits: [String]
    numberOfDataFruits: Int
    priceOfFruits: Float
    isExpensive: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "Wrold";
    },
    fruits: () => {
      return ["banana", "papaya", "grape", "pinneaple", "strawberry"];
    },
    numberOfDataFruits: () => {
      return 5;
    },
    priceOfFruits: () => {
      return 20.5;
    },
    isExpensive: () => {
      return false;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
