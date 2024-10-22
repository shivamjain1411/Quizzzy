import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sampleQuizzes } from "../data/sampleQuizzes";

const SampleQuiz = () => {
  const [userQuizzes, setUserQuizzes] = useState([]);

  useEffect(() => {
    // Load quizzes from localStorage
    const storedQuizzes = JSON.parse(localStorage.getItem("userQuizzes")) || [];
    setUserQuizzes(storedQuizzes);
  }, []);

  // Function to delete a quiz
  const handleDeleteQuiz = (quizName) => {
    const storedQuizzes = JSON.parse(localStorage.getItem("userQuizzes")) || [];
    const updatedQuizzes = storedQuizzes.filter(
      (quiz) => quiz.name !== quizName
    );

    // Update localStorage with the remaining quizzes
    localStorage.setItem("userQuizzes", JSON.stringify(updatedQuizzes));

    // Update the state to reflect the deleted quiz
    setUserQuizzes(updatedQuizzes);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Sample Quizzes</h2>

      <h3 className="text-lg font-semibold mb-2">Predefined Quizzes</h3>
      <ul className="mb-4">
        {sampleQuizzes.map((quiz, index) => (
          <li key={index} className="mb-2">
            <Link to={`/take-quiz/${quiz.name}`}>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                {quiz.name} Quiz
              </button>
            </Link>
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold mb-2">Your Created Quizzes</h3>
      <ul>
        {userQuizzes.length > 0 ? (
          userQuizzes.map((quiz, index) => (
            <li key={index} className="mb-2 flex justify-between items-center">
              <Link to={`/take-quiz/${quiz.name}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  {quiz.name} Quiz
                </button>
              </Link>
              <button
                onClick={() => handleDeleteQuiz(quiz.name)}
                className="bg-red-500 text-white px-4 py-2 rounded ml-4"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No quizzes created yet.</p>
        )}
      </ul>
    </div>
  );
};

export default SampleQuiz;
