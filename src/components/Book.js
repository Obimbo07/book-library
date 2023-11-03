import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, removeBook }) {
  return (
    <div>
      <div className="book-section" key={book.item_id}>
        <div className="book-innerSection">
          <span className="book-category">{book.category}</span>
          <p className="book-title">{book.title}</p>
          <span className="book-author">{book.author}</span>
          <div className="btn-container">
            <button type="button" className="btn">Comment</button>
            <div className="line" />
            <button type="button" className="btn rmv" onClick={() => removeBook(book.item_id)}>Remove</button>
            <div className="line" />
            <button type="button" className="btn">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};
export default Book;
