// import React, { useState } from "react";

// const QuizPlatform = () => {
//   const [activeTab, setActiveTab] = useState("create");
//   const [quizTitle, setQuizTitle] = useState("");
//   const [questions, setQuestions] = useState([]);
//   const [questionCount, setQuestionCount] = useState(0); // New: Number of questions
//   const [timePerQuestion, setTimePerQuestion] = useState(60); // New: Time per question
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedQuiz, setSelectedQuiz] = useState(null);
//   const [score, setScore] = useState(0);
//   const [showResults, setShowResults] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState([]);
//   const [timerInterval, setTimerInterval] = useState(null);

//   const addQuestion = () => {
//     setQuestions([
//       ...questions,
//       {
//         question: "",
//         options: ["", "", "", ""],
//         correctAnswers: [],
//       },
//     ]);
//   };

//   const removeQuestion = (indexToRemove) => {
//     setQuestions(questions.filter((_, index) => index !== indexToRemove));
//   };

//   const updateQuestion = (questionIndex, field, value) => {
//     const updatedQuestions = [...questions];
//     if (field === "question") {
//       updatedQuestions[questionIndex] = {
//         ...updatedQuestions[questionIndex],
//         question: value,
//       };
//     } else if (field.startsWith("option")) {
//       const optionIndex = parseInt(field.replace("option", ""));
//       updatedQuestions[questionIndex] = {
//         ...updatedQuestions[questionIndex],
//         options: updatedQuestions[questionIndex].options.map((opt, idx) =>
//           idx === optionIndex ? value : opt
//         ),
//       };
//     }
//     setQuestions(updatedQuestions);
//   };

//   const toggleCorrectAnswer = (questionIndex, optionIndex) => {
//     const updatedQuestions = [...questions];
//     const currentCorrectAnswers = [
//       ...updatedQuestions[questionIndex].correctAnswers,
//     ];

//     if (currentCorrectAnswers.includes(optionIndex)) {
//       updatedQuestions[questionIndex].correctAnswers =
//         currentCorrectAnswers.filter((index) => index !== optionIndex);
//     } else {
//       updatedQuestions[questionIndex].correctAnswers = [
//         ...currentCorrectAnswers,
//         optionIndex,
//       ];
//     }
//     setQuestions(updatedQuestions);
//   };

//   const startQuiz = (quiz) => {
//     if (timerInterval) {
//       clearInterval(timerInterval);
//     }

//     setSelectedQuiz(quiz);
//     setCurrentQuestion(0);
//     setScore(0);
//     setShowResults(false);
//     setTimeLeft(timePerQuestion); // Use custom time per question

//     const newTimer = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         if (prevTime <= 1) {
//           submitAnswer();
//           return timePerQuestion; // Reset time per question
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     setTimerInterval(newTimer);
//   };

//   const handleAnswerSelect = (optionIndex) => {
//     const updatedAnswers = [...selectedAnswers];
//     if (updatedAnswers.includes(optionIndex)) {
//       updatedAnswers.splice(updatedAnswers.indexOf(optionIndex), 1);
//     } else {
//       updatedAnswers.push(optionIndex);
//     }
//     setSelectedAnswers(updatedAnswers);
//   };

//   const submitAnswer = () => {
//     const currentQ = selectedQuiz.questions[currentQuestion];
//     if (
//       JSON.stringify(selectedAnswers.sort()) ===
//       JSON.stringify(currentQ.correctAnswers.sort())
//     ) {
//       setScore(score + 1);
//     }

//     if (currentQuestion < selectedQuiz.questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//       setSelectedAnswers([]);
//       setTimeLeft(timePerQuestion); // Reset time per question
//     } else {
//       if (timerInterval) {
//         clearInterval(timerInterval);
//       }
//       setShowResults(true);
//     }
//   };

//   const saveQuiz = () => {
//     if (!quizTitle.trim()) {
//       alert("Please add a quiz title");
//       return;
//     }

//     if (questions.length === 0) {
//       alert("Please add at least one question");
//       return;
//     }

//     const isValid = questions.every(
//       (q) =>
//         q.question.trim() &&
//         q.options.every((opt) => opt.trim()) &&
//         q.correctAnswers.length > 0
//     );

//     if (!isValid) {
//       alert(
//         "Please fill all questions, options, and select at least one correct answer for each question"
//       );
//       return;
//     }

//     const newQuiz = {
//       title: quizTitle,
//       questions: questions,
//     };

//     alert("Quiz saved successfully!");
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex mb-6 border-b">
//         <button
//           className={`px-4 py-2 font-medium ${
//             activeTab === "create"
//               ? "border-b-2 border-blue-500 text-blue-500"
//               : "text-gray-500"
//           }`}
//           onClick={() => setActiveTab("create")}
//         >
//           Create Quiz
//         </button>
//         <button
//           className={`px-4 py-2 font-medium ${
//             activeTab === "take"
//               ? "border-b-2 border-blue-500 text-blue-500"
//               : "text-gray-500"
//           }`}
//           onClick={() => setActiveTab("take")}
//         >
//           Take Quiz
//         </button>
//       </div>

//       {activeTab === "create" && (
//         <div className="bg-white rounded-lg shadow p-6">
//           <h2 className="text-2xl font-bold">Create Your Quiz</h2>

//           <input
//             type="text"
//             placeholder="Quiz Title"
//             value={quizTitle}
//             onChange={(e) => setQuizTitle(e.target.value)}
//             className="w-full p-2 border rounded mb-4"
//           />

//           <input
//             type="number"
//             placeholder="How many questions?"
//             value={questionCount}
//             onChange={(e) => setQuestionCount(Number(e.target.value))}
//             className="w-full p-2 border rounded mb-4"
//           />

//           <input
//             type="number"
//             placeholder="Time per question (seconds)"
//             value={timePerQuestion}
//             onChange={(e) => setTimePerQuestion(Number(e.target.value))}
//             className="w-full p-2 border rounded mb-4"
//           />

//           {questions.map((q, qIndex) => (
//             <div key={qIndex} className="border rounded-lg p-4 mb-4">
//               <input
//                 type="text"
//                 placeholder="Question"
//                 value={q.question}
//                 onChange={(e) =>
//                   updateQuestion(qIndex, "question", e.target.value)
//                 }
//                 className="w-full p-2 border rounded mb-2"
//               />

//               {q.options.map((option, oIndex) => (
//                 <div key={oIndex} className="flex items-center space-x-2 mt-2">
//                   <input
//                     type="checkbox"
//                     checked={q.correctAnswers.includes(oIndex)}
//                     onChange={() => toggleCorrectAnswer(qIndex, oIndex)}
//                   />
//                   <input
//                     type="text"
//                     placeholder={`Option ${oIndex + 1}`}
//                     value={option}
//                     onChange={(e) =>
//                       updateQuestion(qIndex, `option${oIndex}`, e.target.value)
//                     }
//                     className="flex-1 p-2 border rounded"
//                   />
//                 </div>
//               ))}
//             </div>
//           ))}

//           <button
//             onClick={addQuestion}
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             Add Question
//           </button>

//           <button
//             onClick={saveQuiz}
//             className="bg-green-500 text-white px-4 py-2 rounded ml-4"
//           >
//             Save Quiz
//           </button>
//         </div>
//       )}

//       {activeTab === "take" && selectedQuiz && !showResults && (
//         <div>
//           <h3 className="text-lg font-semibold">
//             Question {currentQuestion + 1} of {selectedQuiz.questions.length}
//           </h3>
//           <p className="text-lg mb-4">
//             {selectedQuiz.questions[currentQuestion].question}
//           </p>
//           <div className="space-y-2">
//             {selectedQuiz.questions[currentQuestion].options.map(
//               (option, index) => (
//                 <div
//                   key={index}
//                   onClick={() => handleAnswerSelect(index)}
//                   className={`p-3 border rounded-lg cursor-pointer ${
//                     selectedAnswers.includes(index) ? "bg-blue-50" : ""
//                   }`}
//                 >
//                   {option}
//                 </div>
//               )
//             )}
//           </div>

//           <div className="mt-4">
//             <button
//               onClick={submitAnswer}
//               className="bg-green-500 text-white px-4 py-2 rounded"
//             >
//               Submit Answer
//             </button>
//           </div>

//           <div className="mt-2 text-gray-600">
//             Time left: {timeLeft} seconds
//           </div>
//         </div>
//       )}

//       {showResults && (
//         <div>
//           <h3 className="text-2xl font-bold">Quiz Results</h3>
//           <p>
//             Your score: {score} / {selectedQuiz.questions.length}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuizPlatform;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CreateQuizPage from "./pages/CreateQuizPage";
import SampleQuizPage from "./pages/SampleQuizPage";
import TakeQuizPage from "./pages/TakeQuizPage";
import { QuizProvider } from "./context/QuizContext";

const App = () => {
  return (
    <QuizProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-quiz" element={<CreateQuizPage />} />
          <Route path="/sample-quizzes" element={<SampleQuizPage />} />
          <Route path="/take-quiz/:quizName" element={<TakeQuizPage />} />
        </Routes>
      </Router>
    </QuizProvider>
  );
};

export default App;
