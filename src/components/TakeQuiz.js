import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TakeQuiz = ({ questions, timePerQuestion }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(timePerQuestion); // Timer state
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const current = questions[currentQuestion]; // Get current question

  // Function to handle option selection
  const handleOptionChange = (e, option) => {
    const selectedOptions = answers[currentQuestion] || [];

    if (current.allowMultipleCorrect) {
      // Handle checkboxes for multiple correct answers
      if (e.target.checked) {
        setAnswers({
          ...answers,
          [currentQuestion]: [...selectedOptions, option],
        });
      } else {
        setAnswers({
          ...answers,
          [currentQuestion]: selectedOptions.filter((o) => o !== option),
        });
      }
    } else {
      // Handle radio buttons for single correct answer
      setAnswers({
        ...answers,
        [currentQuestion]: [option],
      });
    }
  };

  // Handle next question logic
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(timePerQuestion); // Reset the timer for the next question
    } else {
      handleFinish(); // Finish the quiz if on the last question
    }
  };

  // Timer logic for auto-advancing to the next question
  useEffect(() => {
    if (timeLeft === 0) {
      handleNext(); // Auto-advance when time runs out
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer on component unmount
  }, [timeLeft]); // Re-run effect when `timeLeft` changes

  // Handle finish logic
  const handleFinish = () => {
    let calculatedScore = 0;

    questions.forEach((question, index) => {
      const selectedAnswer = answers[index] || [];
      const correctAnswers = question.correctAnswers;

      if (question.allowMultipleCorrect) {
        // Check if all selected answers match the correct answers
        const allCorrect =
          selectedAnswer.length === correctAnswers.length &&
          selectedAnswer.every((answer) => correctAnswers.includes(answer));

        if (allCorrect) calculatedScore += 1;
      } else {
        // Check for a single correct answer match
        if (selectedAnswer[0] === correctAnswers[0]) {
          calculatedScore += 1;
        }
      }
    });

    setScore(calculatedScore);
    setShowResults(true);
  };

  if (showResults) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Quiz Results</h2>
        <p>
          Your Score: {score} / {questions.length}
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Take the Quiz</h2>
      <div>
        <p className="mb-4">
          Question {currentQuestion + 1} / {questions.length}
        </p>
        <p className="font-semibold">{current.questionText}</p>

        <div className="options mb-4">
          {current.options.map((option, index) => (
            <div key={index} className="flex items-center mb-2">
              {current.allowMultipleCorrect ? (
                <input
                  type="checkbox"
                  checked={(answers[currentQuestion] || []).includes(option)}
                  onChange={(e) => handleOptionChange(e, option)}
                  className="mr-2"
                />
              ) : (
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  checked={(answers[currentQuestion] || []).includes(option)}
                  onChange={(e) => handleOptionChange(e, option)}
                  className="mr-2"
                />
              )}
              <label>{option}</label>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <p className="text-red-500 font-bold">
            Time Left: {timeLeft} seconds
          </p>
        </div>

        {currentQuestion < questions.length - 1 ? (
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleFinish}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default TakeQuiz;
