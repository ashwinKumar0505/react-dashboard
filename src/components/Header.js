import React, { useState } from "react";
import {
  FaSearch,
  FaEnvelope,
  FaBell,
  FaMoon,
  FaSun,
  FaChevronDown,
} from "react-icons/fa";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="flex items-center justify-between py-4 pb-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Markets
      </h1>
      <div className="flex items-center space-x-4">
        <FaSearch className="text-gray-600 dark:text-gray-300 cursor-pointer" />
        <FaEnvelope className="text-gray-600 dark:text-gray-300 cursor-pointer" />
        <FaBell className="text-gray-600 dark:text-gray-300 cursor-pointer" />
        <div className="flex items-center space-x-1 cursor-pointer text-gray-600 dark:text-gray-300">
          <span>EN/USD</span>
          <FaChevronDown />
        </div>
        <div
          onClick={toggleTheme}
          className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full cursor-pointer"
        >
          {isDarkMode ? (
            <FaMoon className="text-gray-600 dark:text-gray-300" />
          ) : (
            <FaSun className="text-yellow-500" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
