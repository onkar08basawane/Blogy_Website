import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom'; 
import styles from './Navbar.module.css';
import SearchData from '../data/SearchData.json'; // ⬅️ import JSON

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearchClick = () => {
    if (!showInput) {
      setShowInput(true); // show input
    } else if (query.trim()) {
      const q = query.toLowerCase();
      const matched = SearchData.filter(
        post =>
          post.title.toLowerCase().includes(q) ||
          post.content.toLowerCase().includes(q)
      );
      setResults(matched);
      console.log("Search results:", matched); // You can render this instead
    }
  };
  const handleKeyPress = (e) => {
  if (e.key === 'Enter' && query.trim()) {
    const q = query.toLowerCase();
    const matched = blogPosts.filter(
      post =>
        post.title.toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q)
    );
    setResults(matched);
    console.log("Search results:", matched);
  }
};


  return (
    <header className={styles.Navbarheader}>
      <div className={styles.Navbar}>
        <img src="./logo.svg" alt="Logo" className={styles.logo} />
      </div>

      <ul className={styles.navList}>
        <li><Link to="/" className={styles.link}>Home</Link></li>
        <li><Link to="/recentpost" className={styles.link}>Recent Posts</Link></li>
        <li><Link to="/membership" className={styles.link}>Membership</Link></li>
        <li className={styles.search} onClick={handleSearchClick}>
          <IoSearch />
        </li>
        {showInput && (
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        )}
      </ul>

      {/* Show results below navbar */}
      {results.length > 0 && (
        <div className={styles.searchResults}>
          {results.map((post) => (
            <div key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
