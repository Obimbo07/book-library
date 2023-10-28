import React from 'react';

const Book = () => {
  const books = [
    {
      id: 1,
      name: 'Spiderman 1998',
      author: 'Peter packer',
    },
    {
      id: 1,
      name: 'Batman 1990',
      author: 'Bruce Wayne',
    },
    {
      id: 1,
      name: 'Hulk 1978',
      author: 'Bruce Jnr',
    },
  ];
  return (
    <div>
      {books.map((book) => (
        <div className="book-section" key={book.name}>
          <li>{book.name}</li>
          <h2>{book.author}</h2>
          <button className="del" type="button">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Book;