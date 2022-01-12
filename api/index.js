const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./src/schema/schema");
const { Query } = require("./src/services/Query");
const { Mutation } = require("./src/services/Mutation");
const { Category } = require("./src/services/Category");
const { Product } = require("./src/services/Product");
const { db } = require("./src/data/db");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Category,
    Product,
  },
  context: {
    db,
  },
});

server.listen().then(({ url }) => {
  console.log("Server is up at " + url);
});
