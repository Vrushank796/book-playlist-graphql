import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css';

//components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const cache = new InMemoryCache();

//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id='main'>
        <h1>My Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
};

export default App;
