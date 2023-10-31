import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  return (
    <div className="Book-C">
      {books.map((item) => (
        <div className="Single-B" key={item.item_id}>
          <h3>{item.title}</h3>
          <p>{item.author}</p>
          <p>{item.category}</p>
          <button
            className="RemoveBook"
            type="button"
            onClick={() => dispatch(removeBook(item.item_id))}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Book;
