import React from "react";
import { Link } from "react-router-dom";
import quizLogo from "../assets/quizLogo.png";
import { sampleQuizzes } from "../data/sampleQuizzes";
import sampleQuizImage1 from "../assets/sampleQuizImage1.jpg";
import sampleQuizImage2 from "../assets/sampleQuizImage2.jpg";
import sampleQuizImage3 from "../assets/sampleQuizImage3.png";
import sampleQuizImage4 from "../assets/sampleQuizImage4.png";

// Array of static images for sample quizzes
const sampleQuizImages = [
  sampleQuizImage1,
  sampleQuizImage2,
  sampleQuizImage3,
  sampleQuizImage4,
];

const HomePage = () => {
  // Show only the first 4 sample quizzes
  const sampleQuizPreview = sampleQuizzes.slice(0, 4);

  return (
    <div className="flex flex-col items-center">
      <div className="sm:flex justify-between items-center w-screen px-28">
        <div>
          <img src={quizLogo} className="h-16" alt="Quiz Logo" />
        </div>
        <div className="text-3xl font-bold underline">My-Quizzy</div>
      </div>
      <div className="w-screen px-14">
        <div className="flex justify-between">
          {/* Left Section: Create Custom Quiz */}
          <div className="w-3/12 bg-blue-100 m-8 pt-6 rounded-xl">
            <div className="">
              <div>
                <h1 className="px-5 pt-2 text-3xl font-bold">
                  Create a custom quiz
                </h1>
                <p className="px-5 pt-4">
                  Design a quiz tailored to your needs. Choose topics, set
                  questions, timers, and more.
                </p>
              </div>
              <div className="px-5 pt-4">
                <Link to="/create-quiz">
                  <button className="bg-blue-500 hover:bg-blue-800 text-white px-6 py-2 rounded-lg w-full">
                    Create Custom Quiz
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section: Sample Quizzes */}
          <div className="w-9/12 bg-gray-300 m-8 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Sample Quizzes</h2>

            <div className="grid grid-cols-2 gap-4">
              {/* Render first 4 sample quizzes */}
              {sampleQuizPreview.map((quiz, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md hover:bg-green-100  items-center"
                >
                  <img
                    src={sampleQuizImages[index % sampleQuizImages.length]}
                    alt={`Profile for ${quiz.name}`}
                    className="h-56 w-full overflow-hidden rounded-md mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-semibold pt-2">{quiz.name}</h4>
                    <p className="text-gray-600">
                      Try this quiz to test your knowledge on {quiz.name}.
                    </p>
                    <Link to={`/take-quiz/${quiz.name}`}>
                      <button className="bg-green-500 hover:bg-green-800 text-white px-4 py-2 rounded-lg mt-2">
                        Take Quiz
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Show All Available Quizzes Button */}
            <div className="mt-8">
              <Link to="/sample-quizzes">
                <button className="bg-green-500 hover:bg-green-800 text-white px-6 py-2 rounded-lg">
                  Show All Available Quizzes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
