import React from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries';

const BookDetails = ({ bookId }) => {
  const { data, loading, error } = useQuery(getBookQuery, {
    variables: { id: bookId },
  });

  const displayBookDetails = () => {
    const { book } = data;
    if (book) {
      return (
        <div>
          {data != null && (
            <div>
              <h2>{data.book.name}</h2>
              <p>{data.book.genre}</p>
              <p>All books by this author:</p>
              <ul className='other-books'>
                {data.book.author.books.map((item) => {
                  return <li key={item.id}>{item.name}</li>;
                })}
              </ul>
            </div>
          )}
        </div>
      );
    } else {
      return <div>No book Selected</div>;
    }
  };

  return (
    <div id='book-details'>
      <div>{data != null ? displayBookDetails() : 'Book Details Here'}</div>
    </div>
  );
};

export default BookDetails;
