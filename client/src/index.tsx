import React from 'react';
import ReactDOM from 'react-dom';
import App from './layout/App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';

// https://rickandmortyapi.com/graphql

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.graphcdn.app/',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
