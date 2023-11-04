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
      item_id: uuidv4(),
      title,
      category,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('Action');
  };
  return (
    <div className="form-section">
      <h2 className="form-title">ADD BOOK NEW</h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="bookTitle" className="input-title form-input" name="bookTitle" placeholder="Book title" />
        <select id="genre" className="category-input form-input" name="genre" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Economy">Economy</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
        <button className="addbtn" type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
