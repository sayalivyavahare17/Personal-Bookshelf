import React, { useState, useEffect } from 'react';
import './BookshelfPage.css';

function BookshelfPage() 
{
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  function removeFromBookshelf(book) {
    const updatedBookshelf = bookshelf.filter(b => b.key !== book.key);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    setBookshelf(updatedBookshelf);
  }

  return (
    <div className="bookshelf-page">
      <h1>My Bookshelf</h1>
      <div className="bookshelf">
        {bookshelf.length > 0 ? (
          bookshelf.map(book => (
            <div key={book.key} className="book-card">
              <h3>{book.title}</h3>
              <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
              <button onClick={() => removeFromBookshelf(book)}>Remove from Bookshelf</button>
            </div>
          ))
        ) : (
          <p>No books in your bookshelf yet.</p>
        )}
      </div>
    </div>
  );
}

export default BookshelfPage;
