import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_POSTS = gql`
  {
    getPosts {
      id
      message
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  const renderPosts = () => {
    if (loading) return <span>Loading...</span>;
    if (error) return error.message;
    return data.getPosts.length === 0
      ? <span>No posts. Try running <code>npm run seed-db</code> under the server folder</span>
      : data.getPosts.map(({ id, message }) => <li key={id}>{message}</li>);
  };

  return (
    <div className="home">
      <div>
        <h1 className="home__title">Home</h1>
        <ul>
          <strong>Posts from GraphQL API:</strong>
          {renderPosts()}
        </ul>
      </div>
    </div>
  );
};

export default Home;
