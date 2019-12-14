import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
// import { gql } from "apollo-boost";
import gql from 'graphql-tag';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { useQuery } from '@apollo/react-hooks';
const graphqlApiUri = 'https://qlth.hpz.vn/v1/graphql';

const hasuraReqHeaders = {
  'content-type': 'application/json',
  'x-hasura-admin-secret': 'hpz'
};


const client = new ApolloClient({

  uri: graphqlApiUri,
  headers: hasuraReqHeaders,
  cache: new InMemoryCache({
       addTypename: true
     })

});

ReactDOM.render(
    <ApolloProvider client={client}>
  <App />,
  </ApolloProvider>,
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
