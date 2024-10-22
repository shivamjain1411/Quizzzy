import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Quiz Platform</h1>
      <div className="space-y-4">
        <Link to="/create-quiz">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
            Create Your Quiz
          </button>
        </Link>
        <Link to="/sample-quizzes">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
            Sample Quizzes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;