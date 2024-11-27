import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs, Book } from "@bts-schema-sharing-demo/types";

const resolvers = {
  Query: {
    books: (): Book[] => [
      {
        title: "The Awakening",
        author: "Kate Chopin",
      },

      {
        title: "City of Glass",
        author: "Paul Auster",
      },
    ],
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
