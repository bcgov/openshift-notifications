import { gql } from 'apollo-server';

/**
 * The `Query` and `Mutation` types are special. They list all available actions
 * the client can execute. To use them, extend them in another schema.
 * See {@link postTypeDefs}
 */
export const baseTypeDefs = gql`
  type Query
  type Mutation
`;
