// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import BookshelfPage from './pages/BookshelfPage';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/bookshelf" element={<BookshelfPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;



