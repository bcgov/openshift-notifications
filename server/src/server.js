import { ApolloServer } from 'apollo-server';

import typeDefs from './graphql/type-defs';
import resolvers from './graphql/resolvers';
import context from './graphql/context';
import database from './database';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

(async () => {
  try {
    await database.sync({ alter: true });
    const { url } = await server.listen({ port: process.env.PORT || 5000 });
    console.log(`Server ready at ${url}`);
  } catch (e) {
    await database.close();
    console.error('Connection error:', e);
  }
})();
