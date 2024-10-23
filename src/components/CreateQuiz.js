import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";

const CreateQuiz = () => {
  const [quizName, setQuizName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [numQuestions, setNumQuestions] = useState(1); // User-specified number of questions
  const [timePerQuestion, setTimePerQuestion] = useState(30); // Default time
  const { setQuiz } = useContext(QuizContext);
  const navigate = useNavigate();

  // Function to add a new question
  const handleAddQuestion = () => {
    if (questions.length >= numQuestions) {
      alert(`Limit reached! You can only add ${numQuestions} questions.`);
      return;
    }
    const newQuestion = {
      questionText: "",
      options: ["", "", "", ""],
      correctAnswers: [],
      allowMultipleCorrect: false,
    };
    setQuestions([...questions, newQuestion]);
  };

  // Validation function to ensure all necessary fields are filled
  const handleSubmitQuiz = () => {
    if (questions.length === 0) {
      alert("Cannot submit quiz with 0 questions.");
      setNumQuestions(1);
      return;
    }
    if (!quizName.trim()) {
      alert("Please provide a quiz name.");
      return;
    }

    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      if (!question.questionText.trim()) {
        alert(`Please provide a title for Question ${i + 1}.`);
        return;
      }
      const incompleteOptions = question.options.some(
        (option) => !option.trim()
      );
      if (incompleteOptions) {
        alert(`Please fill all 4 options for Question ${i + 1}.`);
        return;
      }

      if (question.allowMultipleCorrect && question.correctAnswers.length < 2) {
        alert(
          `For Question ${i + 1}, please select at least two correct answers.`
        );
        return;
      }

      if (
        !question.allowMultipleCorrect &&
        question.correctAnswers.length === 0
      ) {
        alert(
          `Kindly select at least one correct answer for Question ${i + 1}.`
        );
        return;
      }
    }

    const newQuiz = {
      name: quizName,
      questions,
      timePerQuestion,
    };

    const storedQuizzes = JSON.parse(localStorage.getItem("userQuizzes")) || [];
    localStorage.setItem(
      "userQuizzes",
      JSON.stringify([...storedQuizzes, newQuiz])
    );

    setQuiz(newQuiz);
    navigate("/sample-quizzes");
  };

  const handleCorrectAnswerChange = (index, option, isChecked) => {
    const updatedQuestions = [...questions];
    const correctAnswers = updatedQuestions[index].correctAnswers;

    if (isChecked) {
      correctAnswers.push(option);
    } else {
      const answerIndex = correctAnswers.indexOf(option);
      if (answerIndex > -1) {
        correctAnswers.splice(answerIndex, 1);
      }
    }

    updatedQuestions[index].correctAnswers = correctAnswers;
    setQuestions(updatedQuestions);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-6">Quiz Builder</h1>
      <div className="w-full sm:w-9/12 lg:w-6/12 flex flex-col justify-start px-4 sm:px-8 pb-4 shadow-2xl rounded-lg border-2 border-black">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
          Create Your Custom Quiz
        </h2>

        <input
          type="text"
          className="border rounded p-2 mb-4 w-full"
          placeholder="Quiz Name"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
        />

        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Number of Questions:
          </label>
          <input
            type="number"
            className="border rounded p-2 w-full"
            value={numQuestions}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 0 || e.target.value === "") {
                setNumQuestions(value);
              }
            }}
            min="0" // Ensures that numbers cannot be negative
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Time per Question (seconds):
          </label>
          <input
            type="number"
            className="border rounded p-2 w-full"
            value={timePerQuestion}
            onChange={(e) => setTimePerQuestion(e.target.value)}
          />
        </div>

        <div className="mb-4">
          {questions.map((question, index) => (
            <div key={index} className="mb-4">
              <input
                type="text"
                className="border rounded p-2 w-full"
                placeholder={`Question ${index + 1}`}
                value={question.questionText}
                onChange={(e) => {
                  const updatedQuestions = [...questions];
                  updatedQuestions[index].questionText = e.target.value;
                  setQuestions(updatedQuestions);
                }}
              />
              <div className="mt-2 space-y-2">
                {question.options.map((option, optIndex) => (
                  <div key={optIndex} className="flex items-center space-x-2">
                    <input
                      type="text"
                      className="border rounded p-2 w-full"
                      placeholder={`Option ${optIndex + 1}`}
                      value={option}
                      onChange={(e) => {
                        const updatedQuestions = [...questions];
                        updatedQuestions[index].options[optIndex] =
                          e.target.value;
                        setQuestions(updatedQuestions);
                      }}
                    />
                    <input
                      type={
                        question.allowMultipleCorrect ? "checkbox" : "radio"
                      }
                      name={`correct-answer-${index}`}
                      onChange={(e) =>
                        handleCorrectAnswerChange(
                          index,
                          option,
                          e.target.checked
                        )
                      }
                    />
                    <label>Correct</label>
                  </div>
                ))}
              </div>

              <div className="mt-2">
                <label>
                  <input
                    type="checkbox"
                    checked={question.allowMultipleCorrect}
                    onChange={(e) => {
                      const updatedQuestions = [...questions];
                      updatedQuestions[index].allowMultipleCorrect =
                        e.target.checked;
                      setQuestions(updatedQuestions);
                    }}
                  />{" "}
                  Allow multiple correct answers
                </label>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {questions.length < numQuestions && (
            <button
              onClick={handleAddQuestion}
              className="bg-blue-500 hover:bg-blue-800 font-bold text-white px-4 py-2 rounded"
            >
              Add Question
            </button>
          )}

          <button
            onClick={handleSubmitQuiz}
            className="bg-black font-bold text-white px-4 py-2 rounded"
          >
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
