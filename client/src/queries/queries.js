import { gql } from '@apollo/client';

//Get All Books
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

//Get All Authors
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

//Add new Book
const addBookMutation = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

//Get Book By Id
const getBookQuery = gql`
  query ($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };
