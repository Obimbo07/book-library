/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Book({ book, removeBook }) {
  return (
    <div>
      <div className="book-section" key={book.item_id}>
        <div className="book-innerSection">
          <span className="book-category">{book.category}</span>
          <h5 className="book-title">{book.title}</h5>
          <span className="book-author">{book.author}</span>
          <div className="btn-container">
            <button type="button" className="btn">Comment</button>
            <div className="line" />
            <button type="button" className="btn" onClick={() => removeBook(book.item_id)}>Remove</button>
            <div className="line" />
            <button type="button" className="btn">Edit</button>

          </div>
        </div>
        <div className="progress-bar">
          <div className="progress-container">
            <div style={{ width: 70, height: 70 }}>
              <CircularProgressbar value={22} />
            </div>
          </div>
          <div className="text">
            <span className="Percent-Complete">22%</span>
            <span className="Percent-Complete1">Completed</span>
          </div>
          <div className="progress-divider" />
          <div className="Chapter-bar">
            <span className="Chapter-title">CURRENT CHAPTER:</span>
            <span className="Current-Chapter">Chapter 12: Introduction</span>
            <div>
              <button type="button" className="update-progress">UPDATE PROGRESS</button>
            </div>
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
    category: PropTypes.string,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};
export default Book;
