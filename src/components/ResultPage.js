import React from "react";

const ResultPage = ({ score, totalQuestions }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Quiz Results</h2>
      <p>
        Your Score: {score} / {totalQuestions}
      </p>
      {/* Additional result analysis can be shown here */}
    </div>
  );
};

export default ResultPage;
