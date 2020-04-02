export const getPosts = (_, __, { models }) => {
  return models.Post.findAll();
};

export const getPostById = (_, { postId }, { models }) => {
  return models.Post.findOne({ where: { id: postId } });
};

export const createPost = (_, { message }, { models }) => {
  return models.Post.create({ message });
};
