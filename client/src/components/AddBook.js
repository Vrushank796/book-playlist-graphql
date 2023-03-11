import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from '../queries/queries';

const AddBook = (props) => {
  const [bookInfo, setBookInfo] = useState({
    name: '',
    genre: '',
    authorId: '',
  });

  const { data, loading, error } = useQuery(getAuthorsQuery);
  const [addBook] = useMutation(addBookMutation);

  const displayAuthors = () => {
    if (loading) {
      return <option disabled>Loading</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    // console.log(bookInfo);
    addBook({
      variables: {
        name: bookInfo.name,
        genre: bookInfo.genre,
        authorId: bookInfo.authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
    setBookInfo({
      name: '',
      genre: '',
      authorId: '',
    });
  };

  return (
    <form id='add-book' onSubmit={submitForm}>
      <div className='field'>
        <label>Book name:</label>
        <input
          type='text'
          value={bookInfo.name}
          onChange={(e) =>
            setBookInfo((prevState) => {
              return { ...prevState, name: e.target.value };
            })
          }
        />
      </div>
      <div className='field'>
        <label>Genre:</label>
        <input
          type='text'
          value={bookInfo.genre}
          onChange={(e) =>
            setBookInfo((prevState) => {
              return { ...prevState, genre: e.target.value };
            })
          }
        />
      </div>
      <div className='field'>
        <label>Author:</label>
        <select
          value={bookInfo.authorId}
          onChange={(e) =>
            setBookInfo((prevState) => {
              return { ...prevState, authorId: e.target.value };
            })
          }
        >
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;
