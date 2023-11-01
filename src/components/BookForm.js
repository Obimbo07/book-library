import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const newBook = {
        title,
        author,
      };
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="BookForm">
      <h3>Add New Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Book Name"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Enter Author Name"
          value={author}
          onChange={handleAuthorChange}
        />
        <button className="AddBook" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
