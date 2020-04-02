import { getPosts, getPostById, createPost } from './post-resolvers';

export default {
  Query: {
    getPosts,
    getPostById,
  },
  Mutation: {
    createPost,
  },
};
