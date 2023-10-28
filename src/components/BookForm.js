import React from 'react';

const BookForm = () => (
  <div className="form-section">
    <form>
      <input type="text" id="bookTitle" className="form-input" name="bookTitle" placeholder="Book title" />
      <select id="genre" className="form-input" name="genre">
        <option value="fantasy">Fantasy</option>
        <option value="science-fiction">Science Fiction</option>
        <option value="mystery">Mystery</option>
        <option value="romance">Romance</option>
        <option value="horror">Horror</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default BookForm;