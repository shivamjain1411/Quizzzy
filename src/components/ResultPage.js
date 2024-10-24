import React from "react";
import { useNavigate } from "react-router-dom";

const ResultPage = ({
  score,
  totalQuestions,
  questions,
  userAnswers,
  wrongQuestions,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const navigate = useNavigate();

  const getFeedback = () => {
    if (percentage >= 90) return "Excellent! You really know your stuff!";
    if (percentage >= 70) return "Good job! Keep up the good work!";
    if (percentage >= 50) return "Not bad, but there's room for improvement.";
    return "You might want to review the material and try again.";
  };

  return (
    <div className="flex flex-col items-center shadow-2xl p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>

      <p className="text-lg font-semibold">
        Your Score: {score} / {totalQuestions} ({percentage}%)
      </p>

      <p className="text-md text-blue-600 mt-2">{getFeedback()}</p>

      <div className="mt-4 w-full">
        <h3 className="text-lg font-semibold">Answer Breakdown:</h3>
        <div className="flex items-center mt-2 rounded-md overflow-hidden">
          <div
            className="bg-green-500 h-4"
            style={{ width: `${percentage}%` }}
            title={`Correct: ${score}`}
          ></div>
          <div
            className="bg-red-500 h-4"
            style={{ width: `${100 - percentage}%` }}
            title={`Incorrect: ${totalQuestions - score}`}
          ></div>
        </div>
        <p className="text-sm mt-2">
          <span className="text-green-600 font-semibold">Correct</span>: {score}{" "}
          | <span className="text-red-600 font-semibold">Incorrect</span>:{" "}
          {totalQuestions - score}
        </p>
      </div>

      <div className="mt-8 w-full">
        <h3 className="text-xl font-semibold mb-4">Questions You Got Wrong:</h3>
        <div className="space-y-6">
          {wrongQuestions?.map((question, index) => (
            <div
              key={index}
              className="bg-red-50 p-4 rounded-lg border border-red-200"
            >
              <p className="font-semibold text-gray-800 mb-2">
                Question {index + 1}: {question.question}
              </p>
              <p className="text-red-600 mb-1">
                Your Answer: {question.yourAnswer}
              </p>
              <p className="text-green-600">
                Correct Answer: {question.correctAnswer}
              </p>
              {question.explanation && (
                <p className="text-gray-600 mt-2 text-sm border-t border-gray-200 pt-2">
                  Explanation: {question.explanation}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 my-6 rounded-lg transition-colors"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ResultPage;
