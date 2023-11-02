import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('fantasy');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      itemId: uuidv4(),
      title,
      category,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('fantasy');
  };
  return (
    <div className="form-section">
      <form onSubmit={handleFormSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="bookTitle" className="form-input" name="bookTitle" placeholder="Book title" />
        <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" id="author" className="form-input" name="author" placeholder="Author name" />
        <select id="genre" className="form-input" name="genre" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="fantasy">Fantasy</option>
          <option value="science">Science</option>
          <option value="mystery">Mystery</option>
          <option value="romance">Romance</option>
          <option value="action">Action</option>
          <option value="technology">Technology</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
