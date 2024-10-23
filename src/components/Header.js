import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import quizLogo from "../assets/quizLogo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-200 px-4 mx-4 py-4 sm:px-6 sm:py-6 sm:mx-10 md:mx-20 rounded-lg mb-2 relative z-10">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link to="/">
          <img src={quizLogo} className="h-12 sm:h-16" alt="Quiz Logo" />
        </Link>

        {/* Hamburger Button for Mobile */}
        <button
          className="sm:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex sm:items-center absolute top-full left-0 w-full sm:static sm:w-auto bg-transparent sm:bg-transparent sm:relative mt-2 sm:mt-0 z-20`}
        >
          <div className="flex flex-col sm:flex-row sm:gap-x-3 md:gap-x-6 bg-transparent">
            <div className="flex items-center justify-end">
              <Link to="/">
                <h1
                  className={`${
                    location.pathname === "/"
                      ? "bg-yellow-500 text-white"
                      : "hover:text-blue-500 hover:bg-white transition-all duration-200 bg-black text-white"
                  } md:px-4 md:py-2 sm:px-2 sm:py-2 rounded-xl flex justify-center px-2 mb-1 mr-2 text-base sm:text-sm md:text-lg`}
                >
                  Home
                </h1>
              </Link>
            </div>

            {/* Create Quiz */}
            <div className="flex items-center justify-end">
              <Link to="/create-quiz">
                <h1
                  className={`${
                    location.pathname === "/create-quiz"
                      ? "bg-yellow-500 text-white"
                      : "hover:text-blue-500 hover:bg-white transition-all duration-200 bg-black text-white"
                  } md:px-4 md:py-2 sm:px-2 sm:py-2 rounded-xl flex justify-center px-2 mb-1 mr-2 text-base sm:text-sm md:text-lg`}
                >
                  Create
                </h1>
              </Link>
            </div>

            {/* Home */}

            {/* Personal */}
            <div className=" flex items-center justify-end">
              <Link to="/personal">
                <h1
                  className={`${
                    location.pathname === "/personal"
                      ? "bg-yellow-500 text-white"
                      : "hover:text-blue-500 hover:bg-white transition-all duration-200 bg-black text-white"
                  } md:px-4 md:py-2 sm:px-2 sm:py-2 rounded-xl flex justify-center px-2 mb-1 mr-2 text-base sm:text-sm md:text-lg`}
                >
                  Personal
                </h1>
              </Link>
            </div>
            {/* All Quiz */}
            <div className="flex items-center justify-end">
              <Link to="/sample-quizzes">
                <h1
                  className={`${
                    location.pathname === "/sample-quizzes"
                      ? "bg-yellow-500 text-white"
                      : "hover:text-blue-500 hover:bg-white transition-all duration-200 bg-black text-white"
                  } md:px-4 md:py-2 sm:px-2 sm:py-2 rounded-xl flex justify-center px-2 mb-1 mr-2 text-base sm:text-sm md:text-lg`}
                >
                  All
                </h1>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
