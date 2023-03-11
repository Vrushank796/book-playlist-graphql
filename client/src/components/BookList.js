import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';

//components
import BookDetails from './BookDetails';

const BookList = (props) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const { data, loading, error } = useQuery(getBooksQuery);

  const displayBooks = () => {
    if (loading) {
      return <div>Loading books...</div>;
    } else {
      return data.books.map((book) => {
        return (
          <li
            key={book.id}
            onClick={(e) => {
              setSelectedBook(book.id);
            }}
          >
            {book.name}
          </li>
        );
      });
    }
  };

  return (
    <div>
      <ul id='book-list'>{displayBooks()}</ul>
      <BookDetails bookId={selectedBook} />
    </div>
  );
};

export default BookList;
