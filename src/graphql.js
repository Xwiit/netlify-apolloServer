const { ApolloServer, gql } = require("apollo-server-lambda");

//Define your type definitions
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

//define your resolvers
const resolvers = {
  Query: {
    hello: () => "Hello World",
  },
};

// create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

exports.handler = server.createHandler();
