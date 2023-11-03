/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Book({ book, removeBook }) {
  return (
    <div>
      <div className="book-section" key={book.itemId}>
        <div className="book-innerSection">
          <span className="book-category">{book.category}</span>
          <h5 className="book-title">{book.title}</h5>
          <span className="book-author">{book.author}</span>
          <div className="btn-container">
            <button type="button" className="btn">Comment</button>
            <div className="line" />
            <button type="button" className="btn" onClick={() => removeBook(book.itemId)}>Remove</button>
            <div className="line" />
            <button type="button" className="btn">Edit</button>

          </div>
        </div>
        <div className="progress-bar">
          <div className="progress-container">
            <div style={{ width: 70, height: 70 }}>
              <CircularProgressbar value={1} />
            </div>
          </div>
          <div className="text">
            <span className="Percent-Complete">2%</span>
            <span className="Percent-Complete1">Completed</span>
          </div>
        </div>
        <div className="Chapter-bar">
          <span className="Current-Chapter">Current Chapter:</span>
          <span className="Current-Lesson">Chapter 17</span>
          <div className="Rectangle"><span className="update-progress">Update progress</span></div>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};
export default Book;
