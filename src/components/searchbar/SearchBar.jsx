import React, { useEffect, useRef, useState } from 'react';
// import { IoClose } from "react-icons/io5";
import styles from './SearchBar.module.css';

 
const suggestions = [
  "How to Center an Image Using Display Flex",
  "How to Create and Style Buttons like Bootstrap",
  "How to Create an Animated Alert Box",
  "How to Find the Size of a GitHub Repo",
  "How to Merge Video and Text in PPT",
  "How to Merge Picture and Text in PPT",
  "CSS Shapes Lab Codedamn",
  "Header Tag Lab Codedamn",
  "Radio Buttons Lab Codedamn",
  "Fibonacci Generator Lab Codedamn",
  "Color Change Lab Codedamn",
  "Glassy Date,Time & Weather Widget CodePen",
  "Glassy Music Player CodePen",
  "Circular Navigation Menu CodePen",
  "Neumorphism Toggle Switch CodePen",
  "Glowing Border Button CodePen",
  "Sticky Search Bar CodePen",
  "Glowing Gradient Border Cards CodePen",
  "Hover Fill Card CodePen",
  "Hover Fill Button CodePen",
  "Preloader CodePen"
];


const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);

  const filteredSuggestions = suggestions.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowDropdown(true);
  };

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="spectacledcoder-search-bar" ref={searchRef}>
      <input
        id="searchbarinput"
        className="spectacledcoder-search-bar-input"
        type="text"
        placeholder="Type something"
        value={query}
        onChange={handleInputChange}
      />
      {/* <img
        id="searchicon"
        width="22"
        height="22"
        src="https://img.icons8.com/sf-black/100/ffffff/search.png"
        alt="search"
      /> */}

      {showDropdown && query.trim() !== '' && (
        <div className="spectacledcoder-dropdown">
          <ul>
            {filteredSuggestions.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

     
    </div>
  );
};

export default SearchBar;




// import React, { useState, useRef, useEffect } from 'react';
// import './SearchBar.css'; // Extracted CSS if needed

// const suggestions = [
//   "How to Center an Image Using Display Flex",
//   "How to Create and Style Buttons like Bootstrap",
//   "How to Create an Animated Alert Box",
//   "How to Find the Size of a GitHub Repo",
//   "How to Merge Video and Text in PPT",
//   "How to Merge Picture and Text in PPT",
//   "CSS Shapes Lab Codedamn",
//   "Header Tag Lab Codedamn",
//   "Radio Buttons Lab Codedamn",
//   "Fibonacci Generator Lab Codedamn",
//   "Color Change Lab Codedamn",
//   "Glassy Date,Time & Weather Widget CodePen",
//   "Glassy Music Player CodePen",
//   "Circular Navigation Menu CodePen",
//   "Neumorphism Toggle Switch CodePen",
//   "Glowing Border Button CodePen",
//   "Sticky Search Bar CodePen",
//   "Glowing Gradient Border Cards CodePen",
//   "Hover Fill Card CodePen",
//   "Hover Fill Button CodePen",
//   "Preloader CodePen"
// ];

// const SearchBar = () => {
//   const [query, setQuery] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);
//   const searchRef = useRef(null);

//   const filteredSuggestions = suggestions.filter(item =>
//     item.toLowerCase().includes(query.toLowerCase())
//   );

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//     setShowDropdown(true);
//   };

//   const handleClickOutside = (e) => {
//     if (searchRef.current && !searchRef.current.contains(e.target)) {
//       setShowDropdown(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('click', handleClickOutside);
//     return () => window.removeEventListener('click', handleClickOutside);
//   }, []);

//   return (
//     <div className="spectacledcoder-search-bar" ref={searchRef}>
//       <input
//         id="searchbarinput"
//         className="spectacledcoder-search-bar-input"
//         type="text"
//         placeholder="Type something"
//         value={query}
//         onChange={handleInputChange}
//       />
//       <img
//         id="searchicon"
//         width="22"
//         height="22"
//         src="https://img.icons8.com/sf-black/100/ffffff/search.png"
//         alt="search"
//       />

//       {showDropdown && query.trim() !== '' && (
//         <div className="spectacledcoder-dropdown">
//           <ul>
//             {filteredSuggestions.map((item, index) => (
//               <li key={index}>
//                 <p>{item}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       <p className="disclaimer">
//         Designed & Created by <b>SpectacledCoder</b> | Icons by{' '}
//         <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">
//           Icons8
//         </a>
//       </p>
//     </div>
//   );
// };

// export default SearchBar;