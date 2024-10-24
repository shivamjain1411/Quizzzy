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
    <header className="bg-gray-200 px-4 py-2 sm:px-6 sm:py-4 md:px-10 lg:px-20 rounded-lg mb-4 relative z-10 mx-6 md:mx-14 lg:mx-20">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <Link to="/">
          <img
            src={quizLogo}
            className="h-10 sm:h-12 md:h-16"
            alt="Quiz Logo"
          />
        </Link>
        <button
          className={`sm:hidden text-black focus:outline-none ${
            isMenuOpen ? "bg-blue-500" : ""
          } p-2 rounded-md transition-colors duration-300 ease-in-out`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6 transition-transform duration-300 ease-in-out"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 transition-transform duration-300 ease-in-out"
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
          )}
        </button>
        <nav
          className={`sm:flex sm:items-center hidden ${
            isMenuOpen ? "block" : "hidden"
          } w-full sm:w-auto bg-transparent sm:bg-transparent`}
        >
          <div className="flex flex-col sm:flex-row sm:gap-x-3 md:gap-x-6 bg-transparent sm:bg-transparent mt-4 sm:mt-0">
            <Link to="/">
              <h1
                className={`${
                  location.pathname === "/"
                    ? "bg-yellow-500 text-white"
                    : "hover:text-blue-500 hover:bg-white transition-all duration-200 bg-black text-white"
                } md:px-4 md:py-2 sm:px-2 sm:py-2 rounded-xl text-center text-base sm:text-sm md:text-lg`}
              >
                Home
              </h1>
            </Link>

            <Link to="/create-quiz">
              <h1
                className={`${
                  location.pathname === "/create-quiz"
                    ? "bg-yellow-500 text-white"
                    : "hover:text-blue-500 hover:bg-white transition-all duration-200 bg-black text-white"
                } md:px-4 md:py-2 sm:px-2 sm:py-2 rounded-xl text-center text-base sm:text-sm md:text-lg`}
              >
                Create
              </h1>
            </Link>

            <Link to="/personal">
              <h1
                className={`${
                  location.pathname === "/personal"
                    ? "bg-yellow-500 text-white"
                    : "hover:text-blue-500 hover:bg-white transition-all duration-200 bg-black text-white"
                } md:px-4 md:py-2 sm:px-2 sm:py-2 rounded-xl text-center text-base sm:text-sm md:text-lg`}
              >
                Personal
              </h1>
            </Link>

            <Link to="/sample-quizzes">
              <h1
                className={`${
                  location.pathname === "/sample-quizzes"
                    ? "bg-yellow-500 text-white"
                    : "hover:text-blue-500 hover:bg-white transition-all duration-200 bg-black text-white"
                } md:px-4 md:py-2 sm:px-2 sm:py-2 rounded-xl text-center text-base sm:text-sm md:text-lg`}
              >
                All
              </h1>
            </Link>
          </div>
        </nav>
      </div>
      {isMenuOpen && (
        <div className=" sm:hidden w-full flex justify-end bg-gray-200 mt-4 transition-all duration-300 ease-in-out">
          <div className="flex flex-col gap-y-2 px-4 pb-4 justify-center text-center">
            <Link
              to="/"
              className={`${
                location.pathname === "/"
                  ? "bg-yellow-500 text-white"
                  : "hover:text-blue-500 hover:bg-white transition-all duration-200 bg-black text-white"
              } px-4 py-2 rounded-xl text-left`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/create-quiz"
              className={`${
                location.pathname === "/create-quiz"
                  ? "bg-yellow-500 text-white"
                  : "hover:text-blue-500 hover:bg-white transition-all duration-200 bg-black text-white"
              } px-4 py-2 rounded-xl text-left`}
              onClick={() => setIsMenuOpen(false)}
            >
              Create
            </Link>

            <Link
              to="/personal"
              className={`${
                location.pathname === "/personal"
                  ? "bg-yellow-500 text-white"
                  : "hover:text-blue-500 hover:bg-white transition-all duration-200 bg-black text-white"
              } px-4 py-2 rounded-xl text-left`}
              onClick={() => setIsMenuOpen(false)}
            >
              Personal
            </Link>

            <Link
              to="/sample-quizzes"
              className={`${
                location.pathname === "/sample-quizzes"
                  ? "bg-yellow-500 text-white"
                  : "hover:text-blue-500 hover:bg-white transition-all duration-200 bg-black text-white"
              } px-4 py-2 rounded-xl text-left`}
              onClick={() => setIsMenuOpen(false)}
            >
              All
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
