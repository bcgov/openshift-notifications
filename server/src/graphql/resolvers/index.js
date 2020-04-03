import { getPosts, getPostById, createPost, deletePost } from './post-resolvers';

export default {
  Query: {
    getPosts,
    getPostById,
  },
  Mutation: {
    createPost,
    deletePost,
  },
};
