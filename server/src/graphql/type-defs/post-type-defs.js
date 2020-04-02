import { gql } from 'apollo-server';

export const postTypeDefs = gql`
  extend type Query {
    getPosts: [Post!]!
    getPostById(postId: ID!): Post
  }

  extend type Mutation {
    createPost(message: String!): Post!
  }
  
  type Post {
    id: ID!
    message: String!
  }
`;
