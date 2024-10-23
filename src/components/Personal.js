import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Personal = () => {
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
    <div className="mx-4 lg:mx-20">
      <h2 className="text-xl font-bold mb-4">Your Created Quizzes</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {userQuizzes.length > 0 ? (
          userQuizzes.map((quiz, index) => (
            <li
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-100 hover:p-5 transition-all duration-200"
            >
              <div className="flex flex-col items-center">
                <div className="w-full">
                  <img
                    src="https://viralsolutions.net/wp-content/uploads/2019/06/shutterstock_749036344.jpg"
                    alt={`Profile for ${quiz.name}`}
                    className="h-52 w-full rounded-lg overflow-hidden mt-2 object-cover"
                  />
                </div>

                <div className="flex flex-col items-start mt-2 w-full">
                  <h4 className="text-xl font-semibold">{quiz.name}</h4>
                  <p className="text-gray-600">
                    Your custom quiz on {quiz.name}.
                  </p>
                  <div className="flex justify-between items-center mt-2 w-full">
                    <div>
                      <Link to={`/take-quiz/${quiz.name}`}>
                        <button className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-lg">
                          Take Quiz
                        </button>
                      </Link>
                    </div>
                    <div>
                      <button
                        onClick={() => handleDeleteQuiz(quiz.name)}
                        className="bg-red-500 hover:bg-red-800 text-white px-4 py-2 rounded-lg ml-4"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>No quizzes created yet.</p>
        )}
      </ul>
    </div>
  );
};

export default Personal;
