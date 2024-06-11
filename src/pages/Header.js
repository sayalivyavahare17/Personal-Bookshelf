import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">📚 My Bookshelf</div>
      <nav>
        <Link to="/">Search Books</Link>
        <Link to="/bookshelf">My Bookshelf</Link>
      </nav>
    </header>
  );
}

export default Header;
