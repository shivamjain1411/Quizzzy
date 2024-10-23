import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CreateQuizPage from "./pages/CreateQuizPage";
import SampleQuizPage from "./pages/SampleQuizPage";
import TakeQuizPage from "./pages/TakeQuizPage";
import { QuizProvider } from "./context/QuizContext";
import Layout from "./Layout"; // Import the new Layout component

const App = () => {
  return (
    <QuizProvider>
      <Router>
        <Routes>
          {/* Use Layout to wrap all routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="create-quiz" element={<CreateQuizPage />} />
            <Route path="sample-quizzes" element={<SampleQuizPage />} />
            <Route path="take-quiz/:quizName" element={<TakeQuizPage />} />
          </Route>
        </Routes>
      </Router>
    </QuizProvider>
  );
};

export default App;
