import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import * as serviceWorker from './service-worker';
import '@/styles/index.scss';

import Routes from '@/routes/Routes';

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'production'
    ? 'https://openshift-notifications-server.herokuapp.com'
    : 'http://localhost:5000',
});

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://create-react-app.dev/docs/making-a-progressive-web-app/
serviceWorker.unregister();
