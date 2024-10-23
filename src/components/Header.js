import React from "react";
import { Link, useLocation } from "react-router-dom";
import quizLogo from "../assets/quizLogo.png";

function Header() {
  const location = useLocation();

  return (
    <div className="">
      <div className="sm:flex justify-between items-center mx-20 rounded-md py-4 mb-2 px-6 bg-gray-200">
        <div>
          <Link to="/">
            <button>
              <img src={quizLogo} className="h-16" alt="Quiz Logo" />
            </button>
          </Link>
        </div>
        <div className="text-xl flex font-semibold gap-x-12">
          {/* All Quiz */}
          <Link to="/sample-quizzes">
            <h1
              className={`${
                location.pathname === "/sample-quizzes"
                  ? "bg-yellow-500 text-white"
                  : "hover:text-blue-500 hover:bg-white transition-all duration-200 bg-black text-white"
              } px-2 py-1 rounded-xl`}
            >
              All Quiz
            </h1>
          </Link>

          {/* Create Quiz */}
          <Link to="/create-quiz">
            <h1
              className={`${
                location.pathname === "/create-quiz"
                  ? "bg-yellow-500 text-white"
                  : "hover:text-blue-500 hover:bg-white transition-all duration-200 bg-black text-white"
              } px-2 py-1 rounded-xl`}
            >
              Create Quiz
            </h1>
          </Link>

          {/* Home */}
          <Link to="/">
            <h1
              className={`${
                location.pathname === "/"
                  ? "bg-yellow-500 text-white"
                  : "hover:text-blue-500 hover:bg-white transition-all duration-200 bg-black text-white"
              } px-2 py-1 rounded-xl`}
            >
              Home
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
