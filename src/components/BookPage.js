/* eslint-disable camelcase */
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
  const deleteHandler = (item_id) => {
    dispatch(removeBook(item_id));
  };
  return (
    <>
      {books.map((book) => (
        <Book key={book.item_id} book={book} removeBook={() => deleteHandler(book.item_id)} />
      ))}
      <Bookform />
    </>
  );
};
export default BookPage;
