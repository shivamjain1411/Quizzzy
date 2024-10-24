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

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const HomePage = () => {
  const shuffledQuizzes = shuffleArray([...sampleQuizzes]).slice(0, 6);

  return (
    <div className="flex flex-col items-center">
      <div className="w-screen md:px-14 sm:px-8 px-8">
        <div className="flex flex-col justify-between sm:flex sm:flex-row">
          <div className="sm:w-6/12 mb-4 md:w-3/12 bg-blue-100 lg:ml-8 md:mx-3 sm:mx-2 pt-6 rounded-xl">
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
                  <button className="bg-blue-500 hover:bg-blue-800 text-white px-6 py-2 rounded-lg w-full mb-2">
                    Create Custom Quiz
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:w-6/12 md:w-9/12 bg-gray-300 lg:mx-8  md:mx-3 sm:mx-2 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Sample Quizzes</h2>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4">
              {shuffledQuizzes.map((quiz, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:bg-green-100 hover:p-5 transition-all duration-200 items-center"
                >
                  <img
                    src={quiz.image}
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

            {/* all quiz */}
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
