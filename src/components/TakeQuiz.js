import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResultPage from "./ResultPage";

// Utility function to shuffle array and select a subset
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const TakeQuiz = ({ questions, timePerQuestion }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(timePerQuestion); // Timer state
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswerArray, setSelectedAnswerArray] = useState([]);
  const [wrongQuestionArray, setWrongQuestionArray] = useState([]);
  const [randomQuestions, setRandomQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Shuffle and select a subset of questions (e.g., 10 random questions)
    const shuffledQuestions = shuffleArray(questions).slice(0, 10);
    setRandomQuestions(shuffledQuestions);
  }, [questions]);

  const current = randomQuestions[currentQuestion]; // Get current question

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
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setTimeLeft(timePerQuestion); // Reset the timer for the next question
    }
  };
  const handleNext = () => {
    if (currentQuestion < randomQuestions.length - 1) {
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
    let wrongQuestions = [];

    randomQuestions.forEach((question, index) => {
      const selectedAnswer = answers[index] || [];
      const correctAnswers = question.correctAnswers;

      console.log("Question:", question.questionText);
      console.log("Selected Answer:", selectedAnswer);
      console.log("Correct Answers:", correctAnswers);

      if (question.allowMultipleCorrect) {
        // Sort both arrays to ignore order
        const sortedSelectedAnswer = selectedAnswer.slice().sort();
        const sortedCorrectAnswers = correctAnswers.slice().sort();
        console.log(sortedCorrectAnswers, "sorted correct");
        console.log(sortedSelectedAnswer, "sorted selected");

        // Check if the lengths match and the contents are the same
        const allCorrect =
          sortedSelectedAnswer.length === sortedCorrectAnswers.length &&
          sortedSelectedAnswer.every(
            (answer, idx) => answer === sortedCorrectAnswers[idx]
          );

        if (allCorrect) {
          calculatedScore += 1;
        } else {
          wrongQuestions.push({
            question: question.questionText,
            yourAnswer: selectedAnswer.join(", "),
            correctAnswer: correctAnswers.join(", "),
          });
        }
      } else {
        // Single answer case
        if (selectedAnswer[0] === correctAnswers[0]) {
          calculatedScore += 1;
        } else {
          wrongQuestions.push({
            question: question.questionText,
            yourAnswer: selectedAnswer.join(", "),
            correctAnswer: correctAnswers.join(", "),
          });
        }
      }
    });

    // Update the state after the loop
    setWrongQuestionArray(wrongQuestions);
    setSelectedAnswerArray(answers);

    setScore(calculatedScore);
    setShowResults(true);

    console.log("Questions you got wrong:", wrongQuestions);
  };

  if (showResults) {
    return (
      <div className="p-4 flex flex-col justify-center items-center">
        <ResultPage
          wrongQuestions={wrongQuestionArray}
          score={score}
          totalQuestions={randomQuestions.length}
          questions={randomQuestions.map((q) => ({
            question: q.questionText,
            correctAnswer: q.allowMultipleCorrect
              ? q.correctAnswers.join(", ")
              : q.correctAnswers[0],
          }))}
          // userAnswers={Object.values(answers).map((ans) =>
          //   Array.isArray(ans) ? ans.join(", ") : ans
          // )}
          userAnswers={selectedAnswerArray}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 mx-20 rounded-md py-4">
      {randomQuestions.length > 0 && (
        <div className="border border-gray-300 w-11/12 md:w-6/12 lg:w-4/12 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
            Take the Quiz
          </h2>

          <div className="mb-4 text-center">
            <p className="text-gray-700 font-medium">
              Question {currentQuestion + 1} / {randomQuestions.length}
            </p>
          </div>

          <div className="mb-6">
            <p className="font-semibold text-lg text-gray-800 mb-4 text-center">
              {current.questionText}
            </p>

            <div className="options space-y-3">
              {current.options.map((option, index) => {
                // Generate a unique ID for each option
                const optionId = `option-${currentQuestion}-${index}`;
                return (
                  <div
                    key={index}
                    className="flex items-center p-2 bg-gray-100 rounded-lg border border-gray-300 hover:bg-gray-200 transition"
                  >
                    {current.allowMultipleCorrect ? (
                      <label
                        htmlFor={optionId}
                        className="flex items-center w-full"
                      >
                        <input
                          type="checkbox"
                          id={optionId}
                          checked={(answers[currentQuestion] || []).includes(
                            option
                          )}
                          onChange={(e) => handleOptionChange(e, option)}
                          className="mr-3"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ) : (
                      <label
                        htmlFor={optionId}
                        className="flex items-center w-full"
                      >
                        <input
                          type="radio"
                          id={optionId}
                          name={`question-${currentQuestion}`}
                          checked={(answers[currentQuestion] || []).includes(
                            option
                          )}
                          onChange={(e) => handleOptionChange(e, option)}
                          className="mr-3"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-6 text-center">
            <p className="text-red-600 font-bold">
              Time Left: {timeLeft} seconds
            </p>
          </div>
          <div className="flex justify-between">
            <div>
              {currentQuestion > 0 ? (
                <button
                  onClick={handlePrevious}
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
                >
                  Previous
                </button>
              ) : (
                <div></div>
              )}
            </div>
            <div>
              {currentQuestion < randomQuestions.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleFinish}
                  className="w-full bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition"
                >
                  Finish
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TakeQuiz;
