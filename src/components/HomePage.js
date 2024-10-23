import React from "react";
import { Link } from "react-router-dom";
import { sampleQuizzes } from "../data/sampleQuizzes";
import sampleQuizImage1 from "../assets/sampleQuizImage1.jpg";
import sampleQuizImage2 from "../assets/sampleQuizImage2.jpg";
import sampleQuizImage3 from "../assets/sampleQuizImage3.png";
import sampleQuizImage4 from "../assets/sampleQuizImage4.png";
import sampleQuizImage5 from "../assets/sampleQuizImage5.jpg";
import sampleQuizImage6 from "../assets/sampleQuizImage6.jpeg";
import sampleQuizImage7 from "../assets/sampleQuizImage7.jfif";
import sampleQuizImage8 from "../assets/sampleQuizImage8.png";
import sampleQuizImage9 from "../assets/sampleQuizImage9.jpg";

// Shuffle function
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};

const HomePage = () => {
  // Shuffle quizzes and select the first 6
  const shuffledQuizzes = shuffleArray([...sampleQuizzes]).slice(0, 6);

  return (
    <div className="flex flex-col items-center">
      <div className="w-screen px-14">
        <div className="flex justify-between">
          {/* Left Section: Create Custom Quiz */}
          <div className="w-3/12 bg-blue-100 mx-8 pt-6 rounded-xl">
            <div>
              <h1 className="px-5 pt-2 text-3xl font-bold">
                Create a custom quiz
              </h1>
              <p className="px-5 pt-4">
                Design a quiz tailored to your needs. Choose topics, set
                questions, timers, and more.
              </p>
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
          <div className="w-9/12 bg-gray-300 mx-8 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Sample Quizzes</h2>

            <div className="grid grid-cols-3 gap-4">
              {/* Render shuffled sample quizzes */}
              {shuffledQuizzes.map((quiz, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:bg-green-100 hover:p-5 transition-all duration-200 items-center"
                >
                  <img
                    src={quiz.image} // Use the image from quiz data
                    alt={`Profile for ${quiz.name}`}
                    className="h-56 w-full overflow-hidden rounded-md mr-4 object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-semibold pt-2">{quiz.name}</h4>
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
