export default (sequelize, DataTypes) => {

  const Post = sequelize.define('Post', {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { tableName: 'Posts' });

  Post.associate = (models) => {
    // associations can be defined here
  };

  return Post;
};
