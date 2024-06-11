import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchPage.css';
import { Link } from 'react-router-dom';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => {
          setResults(response.data.docs);
        });
    }
  }, [query]);

  function addToBookshelf(book) {
    const currentBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    if (!currentBookshelf.some(b => b.key === book.key)) {
      localStorage.setItem('bookshelf', JSON.stringify([...currentBookshelf, book]));
      alert(`${book.title} added to your bookshelf!`);
    }
  }

  return (
    <div className="search-page">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
      />
      <div className="results">
        {results.map(book => (
          <div key={book.key} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
            <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
          </div>
        ))}
      </div>
      <Link to="/bookshelf">Go to My Bookshelf</Link>
    </div>
  );
}

export default SearchPage;

