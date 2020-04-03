import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_POSTS = gql`
  query GetPosts {
    getPosts {
      id
      message
    }
  }
`;

const CREATE_POST = gql`
  mutation CreatePost($message: String!) {
    createPost(message: $message) {
      id
      message
    }
  }
`;

const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id)
  }
`;

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const { loading, error, data, refetch } = useQuery(GET_POSTS);
  const [createPost] = useMutation(CREATE_POST);
  const [deletePost] = useMutation(DELETE_POST);

  const renderPosts = () => {
    if (loading) return <span>Loading...</span>;
    if (error) return error.message;
    return data.getPosts.length === 0
      ? <span>No posts found.</span>
      : data.getPosts.map(({ id, message }) => (
          <li key={id}>{message} <button onClick={() => handleDeletePost(id)}>Delete</button></li>
        ));
  };

  const handleDeletePost = async (postId) => {
    await deletePost({ variables: { id: postId } });
    await refetch();
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    await createPost({ variables: { message: inputValue } });
    await refetch();
  };

  return (
    <div className="home">
      <div>

        <h1>Home</h1>
        {(!loading && !error) && (
          <form onSubmit={handleCreatePost}>
            <input
              placeholder="Enter your note"
              type="text"
              value={inputValue}
              maxLength={50}
              required
              onChange={(e) => setInputValue(e.target.value)}
            />
            <input
              type="submit"
              value="Create Post"
            />
          </form>
        )}

        <ul className="home__list">
          <strong>Posts from GraphQL API: </strong>
          {renderPosts()}
        </ul>
      </div>
    </div>
  );
};

export default Home;
