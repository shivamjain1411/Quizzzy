import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "../context/QuizContext";
import TakeQuiz from "../components/TakeQuiz";
import { sampleQuizzes } from "../data/sampleQuizzes";
import { useParams } from "react-router-dom";

const TakeQuizPage = () => {
  const { quiz, setQuiz } = useContext(QuizContext);
  const { quizName } = useParams(); // Get quiz name from URL
  const [timePerQuestion, setTimePerQuestion] = useState(null); // Local state for timing
  const [loading, setLoading] = useState(true); // Loading state
  const [quizKey, setQuizKey] = useState(0); // Unique key to force re-render

  useEffect(() => {
    // Clear the previous quiz data and timer before loading a new quiz
    setQuiz(null);
    setTimePerQuestion(null); // Reset the time per question
    setLoading(true); // Start loading

    // Load the correct quiz based on the quizName from the URL
    const storedQuizzes = JSON.parse(localStorage.getItem("userQuizzes")) || [];
    const selectedQuiz =
      storedQuizzes.find((q) => q.name === quizName) ||
      sampleQuizzes.find((q) => q.name === quizName);

    if (selectedQuiz) {
      setQuiz(selectedQuiz); // Set new quiz data
    }
  }, [quizName, setQuiz]);

  useEffect(() => {
    if (quiz) {
      // Update timePerQuestion once the quiz is fully loaded
      const isSampleQuiz = sampleQuizzes.some((q) => q.name === quizName);
      setTimePerQuestion(isSampleQuiz ? 60 : quiz.timePerQuestion); // 60 seconds for sample quizzes
      setLoading(false); // Loading is done

      // Update the quizKey to force re-rendering of TakeQuiz when the quiz changes
      setQuizKey((prevKey) => prevKey + 1); // Increment the key to force re-render
    }
  }, [quiz, quizName]);

  if (loading || !quiz || !quiz.questions || timePerQuestion === null) {
    return <div className="container mx-auto p-4">Loading quiz...</div>; // Wait until the quiz and timePerQuestion are ready
  }

  return (
    <TakeQuiz
      key={quizKey} // Force re-render of TakeQuiz by changing the key
      questions={quiz.questions}
      timePerQuestion={timePerQuestion} // Pass the correct time per question
    />
  );
};

export default TakeQuizPage;
