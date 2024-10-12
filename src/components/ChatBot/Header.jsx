// Header.js
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Header = ({
  user,
  toggleModal,
  handleLogout,
  setQuery,
  query,
  handleSend,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div>
      <div className="">
        {user ? (
          <h1 className="text-left sm:text-center text-xl sm:text-3xl font-bold text-white shadow-md mb-2">
            Welcome, {user.username}
          </h1>
        ) : (
          <h1 className="text-3xl font-bold text-white shadow-md mb-2">
            Please log in
          </h1>
        )}
        <div className="logout-container">
          {/* Dropdown Menu for mobile */}
          <div className="relative inline-block text-left sm:hidden">
            <button
              onClick={toggleDropdown}
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            >
              Menu <ChevronDown className="ml-2 w-3 h-3" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 origin-top-right bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <button
                    onClick={toggleModal}
                    className="block w-full text-left px-4 py-2 text-sm text-blue-500 hover:bg-gray-700"
                  >
                    View History
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* For larger screens, show buttons normally */}
          <div className="hidden sm:flex flex-col sm:flex-row items-center justify-center">
            <button
              onClick={toggleModal} // Open modal on click
              className="mt-1 mx-4 mb-4 sm:mb-0 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              View History
            </button>
            <button onClick={handleLogout} className="Btn flex items-center">
              <div className="sign mr-2">
                <svg viewBox="0 0 512 512" className="w-5 h-5">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>
              <div className="text text-white">Logout</div>
            </button>
          </div>
        </div>
      </div>

      <div className="mb-1 w-full max-w-xl">
        <div className="relative flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask me anything..."
            className="w-full px-6 py-4 border-2 border-blue-500 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-md"
          />

          <button
            onClick={handleSend} // Ensure to call your send function
            className="absolute right-4 flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md"
          >
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
