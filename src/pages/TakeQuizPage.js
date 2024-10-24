import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "../context/QuizContext";
import TakeQuiz from "../components/TakeQuiz";
import { sampleQuizzes } from "../data/sampleQuizzes";
import { useParams } from "react-router-dom";

const TakeQuizPage = () => {
  const { quiz, setQuiz } = useContext(QuizContext);
  const { quizName } = useParams();
  const [timePerQuestion, setTimePerQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quizKey, setQuizKey] = useState(0);

  useEffect(() => {
    setQuiz(null);
    setTimePerQuestion(null);
    setLoading(true);

    const storedQuizzes = JSON.parse(localStorage.getItem("userQuizzes")) || [];
    const selectedQuiz =
      storedQuizzes.find((q) => q.name === quizName) ||
      sampleQuizzes.find((q) => q.name === quizName);

    if (selectedQuiz) {
      setQuiz(selectedQuiz);
    }
  }, [quizName, setQuiz]);

  useEffect(() => {
    if (quiz) {
      const isSampleQuiz = sampleQuizzes.some((q) => q.name === quizName);
      setTimePerQuestion(isSampleQuiz ? 60 : quiz.timePerQuestion);
      setLoading(false);

      setQuizKey((prevKey) => prevKey + 1);
    }
  }, [quiz, quizName]);

  if (loading || !quiz || !quiz.questions || timePerQuestion === null) {
    return <div className="container mx-auto p-4">Loading quiz...</div>;
  }

  return (
    <TakeQuiz
      key={quizKey}
      questions={quiz.questions}
      timePerQuestion={timePerQuestion}
    />
  );
};

export default TakeQuizPage;
