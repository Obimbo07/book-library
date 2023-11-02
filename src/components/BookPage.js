import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';
import Book from './Book';
import Bookform from './BookForm';

const BookPage = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const deleteHandler = (itemId) => {
    dispatch(removeBook(itemId));
  };
  return (
    <>
      {books.map((book) => (
        <Book key={book.itemId} book={book} removeBook={() => deleteHandler(book.itemId)} />
      ))}
      <Bookform />
    </>
  );
};
export default BookPage;
