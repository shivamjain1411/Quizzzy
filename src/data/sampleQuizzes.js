import sampleQuizImage1 from "../assets/sampleQuizImage1.jpg";
import sampleQuizImage2 from "../assets/sampleQuizImage2.jpg";
import sampleQuizImage3 from "../assets/sampleQuizImage3.png";
import sampleQuizImage4 from "../assets/sampleQuizImage4.png";
import sampleQuizImage5 from "../assets/sampleQuizImage5.jpg";
import sampleQuizImage6 from "../assets/sampleQuizImage6.jpeg";

import sampleQuizImage7 from "../assets/sampleQuizImage7.jfif";
import sampleQuizImage8 from "../assets/sampleQuizImage8.png";
import sampleQuizImage9 from "../assets/sampleQuizImage9.jpg";
export const sampleQuizzes = [
  {
    name: "General Knowledge",
    image: sampleQuizImage1,
    questions: [
      {
        questionText: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        correctAnswers: ["Paris"],
      },
      {
        questionText: "Which planet is known as the Red Planet?",
        options: ["Mars", "Earth", "Jupiter", "Venus"],
        correctAnswers: ["Mars"],
      },
      {
        questionText: "Who wrote 'Hamlet'?",
        options: [
          "William Shakespeare",
          "Charles Dickens",
          "Jane Austen",
          "Mark Twain",
        ],
        correctAnswers: ["William Shakespeare"],
      },
      {
        questionText: "What is the largest ocean on Earth?",
        options: [
          "Pacific Ocean",
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean",
        ],
        correctAnswers: ["Pacific Ocean"],
      },
      {
        questionText: "In which year did World War II end?",
        options: ["1945", "1939", "1942", "1918"],
        correctAnswers: ["1945"],
      },
      {
        questionText: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Osmium", "Oganesson"],
        correctAnswers: ["Oxygen"],
      },
      {
        questionText: "Who is known as the father of the computer?",
        options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        correctAnswers: ["Charles Babbage"],
      },
      {
        questionText: "What is the hardest natural substance on Earth?",
        options: ["Diamond", "Iron", "Gold", "Graphite"],
        correctAnswers: ["Diamond"],
      },
      {
        questionText: "Which country is home to the kangaroo?",
        options: ["Australia", "India", "Brazil", "South Africa"],
        correctAnswers: ["Australia"],
      },
      {
        questionText: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "O2", "CH4"],
        correctAnswers: ["H2O"],
      },
      {
        questionText: "Which continent is the Sahara Desert located on?",
        options: ["Africa", "Asia", "Australia", "South America"],
        correctAnswers: ["Africa"],
      },
      {
        questionText: "Who discovered penicillin?",
        options: [
          "Alexander Fleming",
          "Marie Curie",
          "Isaac Newton",
          "Albert Einstein",
        ],
        correctAnswers: ["Alexander Fleming"],
      },
      {
        questionText: "Which is the longest river in the world?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        correctAnswers: ["Nile"],
      },
      {
        questionText: "Who painted the Mona Lisa?",
        options: [
          "Leonardo da Vinci",
          "Vincent van Gogh",
          "Pablo Picasso",
          "Claude Monet",
        ],
        correctAnswers: ["Leonardo da Vinci"],
      },
      {
        questionText: "Which country hosted the 2016 Summer Olympics?",
        options: ["Brazil", "China", "Japan", "United Kingdom"],
        correctAnswers: ["Brazil"],
      },
      {
        questionText: "What is the largest mammal on Earth?",
        options: ["Blue whale", "Elephant", "Giraffe", "Shark"],
        correctAnswers: ["Blue whale"],
      },
      {
        questionText: "Which planet is closest to the sun?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        correctAnswers: ["Mercury"],
      },
      {
        questionText: "Who was the first person to walk on the moon?",
        options: [
          "Neil Armstrong",
          "Buzz Aldrin",
          "Yuri Gagarin",
          "John Glenn",
        ],
        correctAnswers: ["Neil Armstrong"],
      },
      {
        questionText: "Which country invented paper?",
        options: ["China", "Egypt", "Greece", "India"],
        correctAnswers: ["China"],
      },
      {
        questionText: "What is the capital of Japan?",
        options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
        correctAnswers: ["Tokyo"],
      },
    ],
  },

  {
    name: "JavaScript",
    image: sampleQuizImage2,
    questions: [
      {
        questionText: "What is a closure?",
        options: ["A function", "An object", "A method", "A variable"],
        correctAnswers: ["A function"],
      },
      {
        questionText: "Which company developed JavaScript?",
        options: ["Netscape", "Microsoft", "Google", "Mozilla"],
        correctAnswers: ["Netscape"],
      },
      {
        questionText: "What does 'this' keyword refer to in JavaScript?",
        options: [
          "The current object",
          "The global object",
          "A method",
          "A class",
        ],
        correctAnswers: ["The current object"],
      },
      {
        questionText:
          "Which of the following is used to define a variable in ES6?",
        options: ["let", "var", "const", "Both let and const"],
        correctAnswers: ["Both let and const"],
      },
      {
        questionText: "What is the output of `typeof null`?",
        options: ["object", "null", "undefined", "boolean"],
        correctAnswers: ["object"],
      },
      {
        questionText:
          "Which method is used to create a new array with the results of calling a function for every array element?",
        options: ["map()", "forEach()", "filter()", "reduce()"],
        correctAnswers: ["map()"],
      },
      {
        questionText: "Which of the following is a JavaScript framework?",
        options: ["React", "Django", "Laravel", "Flask"],
        correctAnswers: ["React"],
      },
      {
        questionText: "What will `console.log(2 + '2')` output?",
        options: ["'22'", "4", "NaN", "undefined"],
        correctAnswers: ["'22'"],
      },
      {
        questionText: "What is the purpose of 'use strict' in JavaScript?",
        options: [
          "To enforce stricter parsing and error handling",
          "To enable modules",
          "To allow multi-threading",
          "To improve performance",
        ],
        correctAnswers: ["To enforce stricter parsing and error handling"],
      },
      {
        questionText:
          "Which built-in method removes the last element from an array and returns that element?",
        options: ["pop()", "shift()", "splice()", "push()"],
        correctAnswers: ["pop()"],
      },
      {
        questionText: "What is the difference between `==` and `===`?",
        options: [
          "`===` checks for both value and type equality",
          "`==` checks only for type equality",
          "`==` checks only for value",
          "`===` does type coercion",
        ],
        correctAnswers: ["`===` checks for both value and type equality"],
      },
      {
        questionText:
          "Which method is used to convert JSON text into a JavaScript object?",
        options: [
          "JSON.parse()",
          "JSON.stringify()",
          "JSON.convert()",
          "JSON.toObject()",
        ],
        correctAnswers: ["JSON.parse()"],
      },
      {
        questionText:
          "Which object in JavaScript has methods to interact with browser storage?",
        options: [
          "localStorage",
          "window",
          "sessionStorage",
          "Both localStorage and sessionStorage",
        ],
        correctAnswers: ["Both localStorage and sessionStorage"],
      },
      {
        questionText:
          "Which array method is used to return a shallow copy of a portion of an array?",
        options: ["slice()", "splice()", "split()", "concat()"],
        correctAnswers: ["slice()"],
      },
      {
        questionText: "How do you write a comment in JavaScript?",
        options: ["//", "/* */", "#", "// and /* */"],
        correctAnswers: ["// and /* */"],
      },
      {
        questionText: "What is the value of `undefined == null`?",
        options: ["true", "false", "NaN", "undefined"],
        correctAnswers: ["true"],
      },
      {
        questionText:
          "Which JavaScript method can be used to select an element by its ID?",
        options: [
          "document.getElementById()",
          "document.querySelector()",
          "document.getElementByTag()",
          "document.getClass()",
        ],
        correctAnswers: ["document.getElementById()"],
      },
      {
        questionText:
          "Which method is used to return the string representation of an object?",
        options: ["toString()", "stringify()", "toText()", "convertToString()"],
        correctAnswers: ["toString()"],
      },
      {
        questionText:
          "Which function is used to schedule a function to be executed after a set time?",
        options: [
          "setTimeout()",
          "setInterval()",
          "setImmediate()",
          "requestAnimationFrame()",
        ],
        correctAnswers: ["setTimeout()"],
      },
      {
        questionText:
          "Which method is used to combine two or more arrays in JavaScript?",
        options: ["concat()", "join()", "merge()", "combine()"],
        correctAnswers: ["concat()"],
      },
    ],
  },

  {
    name: "React",
    image: sampleQuizImage3,
    questions: [
      {
        questionText: "What is JSX?",
        options: ["A function", "A syntax extension", "A variable", "A method"],
        correctAnswers: ["A syntax extension"],
      },
      {
        questionText: "What is the purpose of React?",
        options: [
          "Building user interfaces",
          "Database management",
          "Server-side scripting",
          "File handling",
        ],
        correctAnswers: ["Building user interfaces"],
      },
      {
        questionText: "Which method is used to create components in React?",
        options: ["Function or class", "createElement", "useState", "setState"],
        correctAnswers: ["Function or class"],
      },
      {
        questionText: "What is a state in React?",
        options: ["An object", "A function", "A class", "A method"],
        correctAnswers: ["An object"],
      },
      {
        questionText:
          "Which hook is used for adding state to functional components?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        correctAnswers: ["useState"],
      },
      {
        questionText: "What is the virtual DOM in React?",
        options: [
          "A lightweight representation of the real DOM",
          "A database",
          "A browser API",
          "A server",
        ],
        correctAnswers: ["A lightweight representation of the real DOM"],
      },
      {
        questionText:
          "Which lifecycle method is called after the component is rendered for the first time?",
        options: [
          "componentDidMount",
          "componentWillUnmount",
          "componentDidUpdate",
          "shouldComponentUpdate",
        ],
        correctAnswers: ["componentDidMount"],
      },
      {
        questionText: "What is the correct way to update the state in React?",
        options: ["setState", "changeState", "updateState", "modifyState"],
        correctAnswers: ["setState"],
      },
      {
        questionText: "What is the purpose of props in React?",
        options: [
          "To pass data between components",
          "To manage state",
          "To call APIs",
          "To handle errors",
        ],
        correctAnswers: ["To pass data between components"],
      },
      {
        questionText: "How do you handle events in React?",
        options: [
          "Using event handlers like onClick",
          "Using addEventListener",
          "Using bind()",
          "Using setTimeout()",
        ],
        correctAnswers: ["Using event handlers like onClick"],
      },
      {
        questionText: "Which hook is used for side effects in React?",
        options: ["useEffect", "useState", "useContext", "useMemo"],
        correctAnswers: ["useEffect"],
      },
      {
        questionText: "What is React Router used for?",
        options: [
          "Routing between pages",
          "Managing state",
          "Fetching APIs",
          "Styling components",
        ],
        correctAnswers: ["Routing between pages"],
      },
      {
        questionText: "What does React use to improve performance?",
        options: [
          "Virtual DOM",
          "Real DOM",
          "Server-side rendering",
          "Caching",
        ],
        correctAnswers: ["Virtual DOM"],
      },
      {
        questionText: "How can you prevent a re-render in React?",
        options: [
          "Using shouldComponentUpdate",
          "Using useEffect",
          "Using useMemo",
          "Using event handlers",
        ],
        correctAnswers: ["Using shouldComponentUpdate"],
      },
      {
        questionText: "What is the purpose of the useContext hook?",
        options: [
          "To share state between components without passing props",
          "To manage lifecycle methods",
          "To fetch APIs",
          "To update state",
        ],
        correctAnswers: [
          "To share state between components without passing props",
        ],
      },
      {
        questionText: "What does 'lifting state up' mean in React?",
        options: [
          "Moving state to a common parent component",
          "Passing state to child components",
          "Removing state",
          "Resetting state",
        ],
        correctAnswers: ["Moving state to a common parent component"],
      },
      {
        questionText: "How do you conditionally render elements in React?",
        options: [
          "Using ternary operators or logical &&",
          "Using if-else statements",
          "Using switch-case",
          "Using map()",
        ],
        correctAnswers: ["Using ternary operators or logical &&"],
      },
      {
        questionText:
          "What is the difference between functional and class components in React?",
        options: [
          "Functional components are stateless, class components can have state",
          "Functional components are faster",
          "Class components are deprecated",
          "There is no difference",
        ],
        correctAnswers: [
          "Functional components are stateless, class components can have state",
        ],
      },
      {
        questionText:
          "Which hook is used to create a reference to a DOM element in React?",
        options: ["useRef", "useEffect", "useState", "useMemo"],
        correctAnswers: ["useRef"],
      },
      {
        questionText: "What is the purpose of React's useReducer hook?",
        options: [
          "To manage complex state logic",
          "To update props",
          "To handle side effects",
          "To optimize rendering",
        ],
        correctAnswers: ["To manage complex state logic"],
      },
    ],
  },

  {
    name: "Python",
    image: sampleQuizImage4,
    questions: [
      {
        questionText:
          "Which of the following is used to define a block of code (like a function or loop) in Python?",
        options: [
          "Curly braces {}",
          "Parentheses ()",
          "Indentation",
          "Semicolons ;",
        ],
        correctAnswers: ["Indentation"],
      },
      {
        questionText: "What is the correct file extension for Python files?",
        options: [".py", ".java", ".txt", ".pyt"],
        correctAnswers: [".py"],
      },
      {
        questionText:
          "Which of the following data types is immutable in Python?",
        options: ["Tuple", "List", "Dictionary", "Set"],
        correctAnswers: ["Tuple"],
      },
      {
        questionText:
          "What is the output of the following code: `print(2**3)`?",
        options: ["8", "6", "9", "16"],
        correctAnswers: ["8"],
      },
      {
        questionText:
          "Which of the following is a Python framework for web development?",
        options: ["Django", "React", "Flask", "Both Django and Flask"],
        correctAnswers: ["Both Django and Flask"],
      },
      {
        questionText: "What keyword is used to define a function in Python?",
        options: ["def", "function", "func", "define"],
        correctAnswers: ["def"],
      },
      {
        questionText: "What does `len()` function do in Python?",
        options: [
          "Returns the length of an object",
          "Creates a list",
          "Returns the type of a variable",
          "Breaks out of a loop",
        ],
        correctAnswers: ["Returns the length of an object"],
      },
      {
        questionText: "How can you create a variable in Python?",
        options: [
          "By simply assigning a value",
          "Using var keyword",
          "Using let keyword",
          "Using const keyword",
        ],
        correctAnswers: ["By simply assigning a value"],
      },
      {
        questionText:
          "What is the correct syntax to output 'Hello World' in Python?",
        options: [
          "print('Hello World')",
          "echo 'Hello World'",
          "console.log('Hello World')",
          "document.write('Hello World')",
        ],
        correctAnswers: ["print('Hello World')"],
      },
      {
        questionText: "Which keyword is used to start a loop in Python?",
        options: ["for", "loop", "repeat", "while"],
        correctAnswers: ["for"],
      },
      {
        questionText: "What is the difference between `==` and `is` in Python?",
        options: [
          "`==` checks for equality of values, `is` checks for object identity",
          "`==` checks types, `is` checks values",
          "`==` is for comparison, `is` is for assignment",
          "`==` checks for object identity, `is` checks for equality of values",
        ],
        correctAnswers: [
          "`==` checks for equality of values, `is` checks for object identity",
        ],
      },
      {
        questionText: "Which Python module is used to generate random numbers?",
        options: ["random", "math", "numbers", "randomizer"],
        correctAnswers: ["random"],
      },
      {
        questionText: "How do you start a comment in Python?",
        options: ["#", "//", "/*", "--"],
        correctAnswers: ["#"],
      },
      {
        questionText: "What will the expression `3 + 2 * 2` evaluate to?",
        options: ["7", "10", "8", "6"],
        correctAnswers: ["7"],
      },
      {
        questionText:
          "Which of the following is used to handle exceptions in Python?",
        options: ["try-except", "if-else", "switch-case", "try-catch"],
        correctAnswers: ["try-except"],
      },
      {
        questionText: "What does the `append()` method do in Python?",
        options: [
          "Adds an element to the end of a list",
          "Adds an element at a specific position",
          "Removes an element",
          "Creates a new list",
        ],
        correctAnswers: ["Adds an element to the end of a list"],
      },
      {
        questionText:
          "What is the purpose of the `self` parameter in Python classes?",
        options: [
          "To refer to the instance of the class",
          "To refer to the class itself",
          "To create a static method",
          "To create a class method",
        ],
        correctAnswers: ["To refer to the instance of the class"],
      },
      {
        questionText:
          "Which of the following is used to import a module in Python?",
        options: ["import", "include", "require", "using"],
        correctAnswers: ["import"],
      },
      {
        questionText: "What is the output of `print(type([]))` in Python?",
        options: [
          "<class 'list'>",
          "<class 'dict'>",
          "<class 'tuple'>",
          "<class 'set'>",
        ],
        correctAnswers: ["<class 'list'>"],
      },
      {
        questionText:
          "Which function is used to iterate over a sequence in Python?",
        options: ["range()", "loop()", "iterate()", "sequence()"],
        correctAnswers: ["range()"],
      },
    ],
  },

  {
    name: "Marvel",
    image: sampleQuizImage5,
    questions: [
      {
        questionText: "What is Captain America’s shield made of?",
        options: ["Adamantium", "Vibranium", "Uru Metal", "Titanium"],
        correctAnswers: ["Vibranium"],
      },
      {
        questionText: "Who is the director of S.H.I.E.L.D.?",
        options: ["Nick Fury", "Tony Stark", "Phil Coulson", "Steve Rogers"],
        correctAnswers: ["Nick Fury"],
      },
      {
        questionText: "What is the real name of Black Panther?",
        options: ["T'Challa", "M'Baku", "T'Chaka", "Killmonger"],
        correctAnswers: ["T'Challa"],
      },
      {
        questionText: "Which Infinity Stone is located on Vormir?",
        options: ["Soul Stone", "Reality Stone", "Power Stone", "Space Stone"],
        correctAnswers: ["Soul Stone"],
      },
      {
        questionText: "Who is Thor’s adopted brother?",
        options: ["Loki", "Heimdall", "Odin", "Sif"],
        correctAnswers: ["Loki"],
      },
      {
        questionText: "Which character is known as the 'Merc with a Mouth'?",
        options: ["Deadpool", "Spider-Man", "Hawkeye", "Wolverine"],
        correctAnswers: ["Deadpool"],
      },
      {
        questionText: "Who created Ultron?",
        options: ["Tony Stark", "Bruce Banner", "Steve Rogers", "Nick Fury"],
        correctAnswers: ["Tony Stark"],
      },
      {
        questionText: "What is the name of Peter Quill’s alter ego?",
        options: ["Star-Lord", "Rocket", "Drax", "Nova"],
        correctAnswers: ["Star-Lord"],
      },
      {
        questionText: "Which planet is Thanos from?",
        options: ["Titan", "Xandar", "Asgard", "Sakaar"],
        correctAnswers: ["Titan"],
      },
      {
        questionText: "What type of doctor is Doctor Strange?",
        options: [
          "Neurosurgeon",
          "Cardiologist",
          "Psychiatrist",
          "Dermatologist",
        ],
        correctAnswers: ["Neurosurgeon"],
      },
      {
        questionText: "What is the name of Iron Man’s AI assistant?",
        options: ["J.A.R.V.I.S.", "F.R.I.D.A.Y.", "E.D.I.T.H.", "U.L.T.R.O.N."],
        correctAnswers: ["J.A.R.V.I.S."],
      },
      {
        questionText:
          "Which of the following is NOT a member of the Guardians of the Galaxy?",
        options: ["Hawkeye", "Gamora", "Rocket", "Groot"],
        correctAnswers: ["Hawkeye"],
      },
      {
        questionText: "Which villain is also known as the Mad Titan?",
        options: ["Thanos", "Ultron", "Loki", "Red Skull"],
        correctAnswers: ["Thanos"],
      },
      {
        questionText:
          "Which character has the power of telekinesis and energy manipulation?",
        options: [
          "Scarlet Witch",
          "Black Widow",
          "Captain Marvel",
          "Peggy Carter",
        ],
        correctAnswers: ["Scarlet Witch"],
      },
      {
        questionText: "What material is Mjolnir, Thor’s hammer, made of?",
        options: ["Uru Metal", "Vibranium", "Adamantium", "Steel"],
        correctAnswers: ["Uru Metal"],
      },
      {
        questionText: "What is the real name of Ant-Man?",
        options: ["Scott Lang", "Hank Pym", "Sam Wilson", "Clint Barton"],
        correctAnswers: ["Scott Lang"],
      },
      {
        questionText:
          "What is the name of the alien race Loki sends to invade Earth?",
        options: ["Chitauri", "Skrulls", "Kree", "Frost Giants"],
        correctAnswers: ["Chitauri"],
      },
      {
        questionText: "Who is the Winter Soldier?",
        options: ["Bucky Barnes", "Steve Rogers", "Sam Wilson", "Clint Barton"],
        correctAnswers: ["Bucky Barnes"],
      },
      {
        questionText: "What is the name of the Black Widow’s real identity?",
        options: [
          "Natasha Romanoff",
          "Yelena Belova",
          "Sharon Carter",
          "Peggy Carter",
        ],
        correctAnswers: ["Natasha Romanoff"],
      },
      {
        questionText: "What is the name of Tony Stark’s father?",
        options: ["Howard Stark", "Steve Stark", "Anthony Stark", "John Stark"],
        correctAnswers: ["Howard Stark"],
      },
    ],
  },

  {
    name: "One Piece",
    image: sampleQuizImage6,
    questions: [
      {
        questionText: "Who was the first member to join Luffy’s crew?",
        options: ["Sanji", "Nami", "Zoro", "Usopp"],
        correctAnswers: ["Zoro"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which of the following is a Devil Fruit?",
        options: [
          "Gomu Gomu no Mi",
          "Mera Mera no Mi",
          "Horu Horu no Mi",
          "arigato arigato no Mi",
        ],
        correctAnswers: [
          "Gomu Gomu no Mi",
          "Mera Mera no Mi",
          "Horu Horu no Mi",
        ],
        allowMultipleCorrect: true,
      },
      {
        questionText: "Who is the captain of the Straw Hat Pirates?",
        options: ["Sanji", "Nami", "Luffy", "Zoro"],
        correctAnswers: ["Luffy"],
        allowMultipleCorrect: false,
      },
      {
        questionText:
          "Which member of the crew has a bounty of 1.5 billion berries?",
        options: ["Luffy", "Zoro", "Sanji", "Nami"],
        correctAnswers: ["Luffy"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which of the following characters is a Marine Admiral?",
        options: ["Akainu", "Kizaru", "Aokiji", "Garp"],
        correctAnswers: ["Akainu", "Kizaru", "Aokiji"],
        allowMultipleCorrect: true,
      },
      {
        questionText: "What is Nami's primary goal?",
        options: [
          "To become Pirate King",
          "To find One Piece",
          "To draw a complete map of the world",
          "To defeat Kaido",
        ],
        correctAnswers: ["To draw a complete map of the world"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Who is the doctor of the Straw Hat Pirates?",
        options: ["Nami", "Chopper", "Usopp", "Franky"],
        correctAnswers: ["Chopper"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which of the following is a current Yonko?",
        options: ["Shanks", "Buggy", "Kaido", "Big Mom"],
        correctAnswers: ["Shanks", "Buggy"],
        allowMultipleCorrect: true,
      },
      {
        questionText: "Who trained Luffy during the time skip?",
        options: ["Rayleigh", "Garp", "Sengoku", "Kuma"],
        correctAnswers: ["Rayleigh"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "What is the name of Zoro’s sword style?",
        options: ["Santoryu", "Nitoryu", "Ittoryu", "Tanto"],
        correctAnswers: ["Santoryu"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which character is known as 'Black Leg'?",
        options: ["Zoro", "Luffy", "Sanji", "Usopp"],
        correctAnswers: ["Sanji"],
        allowMultipleCorrect: false,
      },
      {
        questionText:
          "Who are the two characters that have the highest bounties in One Piece?",
        options: ["Luffy", "Kaido", "Garp", "Zoro"],
        correctAnswers: ["Luffy", "Kaido"],
        allowMultipleCorrect: true,
      },
      {
        questionText: "Which of the following characters is a former Warlord?",
        options: ["Crocodile", "Buggy", "Kuma", "All of the above"],
        correctAnswers: ["Crocodile", "Kuma"],
        allowMultipleCorrect: true,
      },
      {
        questionText: "Who is known as the 'Pirate Hunter'?",
        options: ["Usopp", "Zoro", "Sanji", "Luffy"],
        correctAnswers: ["Zoro"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which of the following is Luffy's main rival?",
        options: ["Zoro", "Ace", "Law", "Kid"],
        correctAnswers: ["Law", "Kid"],
        allowMultipleCorrect: true,
      },
      {
        questionText: "Who is the shipwright of the Straw Hat Pirates?",
        options: ["Usopp", "Chopper", "Franky", "Brook"],
        correctAnswers: ["Franky"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "What is the name of Luffy's ship?",
        options: ["Thousand Sunny", "Going Merry", "Straw Hat", "Sunny Go"],
        correctAnswers: ["Thousand Sunny"],
        allowMultipleCorrect: false,
      },
      {
        questionText:
          "Which of the following is a member of the Revolutionary Army?",
        options: ["Sabo", "Dragon", "Crocodile", "Black Beard"],
        correctAnswers: ["Sabo", "Dragon"],
        allowMultipleCorrect: true,
      },
      {
        questionText:
          "Who is the strongest creature in the world according to One Piece?",
        options: ["Kaido", "Big Mom", "Shanks", "Whitebeard"],
        correctAnswers: ["Kaido"],
        allowMultipleCorrect: false,
      },
    ],
  },
  {
    name: "C++",
    image: sampleQuizImage7,
    questions: [
      {
        questionText: "What does C++ stand for?",
        options: ["C with Classes", "C Plus Plus", "C Incremented", "C-Plus"],
        correctAnswers: ["C with Classes", "C Plus Plus"],
        allowMultipleCorrect: true,
      },
      {
        questionText: "Which of the following is a valid C++ data type?",
        options: ["int", "float", "double", "All of the above"],
        correctAnswers: ["All of the above"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which operator is used to access members of a class?",
        options: ["->", ".", "&", "*"],
        correctAnswers: ["->", "."],
        allowMultipleCorrect: true,
      },
      {
        questionText:
          "What is the output of the following code: console.log(5 / 2);",
        options: ["2", "2.5", "3", "Compilation Error"],
        correctAnswers: ["2"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which of the following is not a valid access specifier?",
        options: ["public", "protected", "private", "internal"],
        correctAnswers: ["internal"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which keyword is used to create a constructor?",
        options: ["new", "create", "constructor", "None of the above"],
        correctAnswers: ["None of the above"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "What does 'virtual' keyword do in C++?",
        options: [
          "Makes a function callable from base class",
          "Prevents function overriding",
          "Creates a copy of a function",
          "None of the above",
        ],
        correctAnswers: ["Makes a function callable from base class"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which of the following can be overloaded?",
        options: [
          "Operators",
          "Functions",
          "Both Operators and Functions",
          "None of the above",
        ],
        correctAnswers: ["Both Operators and Functions"],
        allowMultipleCorrect: false,
      },
      {
        questionText:
          "What is the default access level for class members in C++?",
        options: ["public", "private", "protected", "None of the above"],
        correctAnswers: ["private"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which of the following is a feature of C++?",
        options: [
          "Encapsulation",
          "Polymorphism",
          "Inheritance",
          "All of the above",
        ],
        correctAnswers: ["All of the above"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "What is the purpose of the 'friend' keyword?",
        options: [
          "To allow access to private members",
          "To create a global function",
          "To inherit from another class",
          "None of the above",
        ],
        correctAnswers: ["To allow access to private members"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "What is a pure virtual function?",
        options: [
          "A function without an implementation",
          "A function with multiple definitions",
          "A function defined in the base class",
          "None of the above",
        ],
        correctAnswers: ["A function without an implementation"],
        allowMultipleCorrect: false,
      },
      {
        questionText:
          "Which of the following is used to handle exceptions in C++?",
        options: ["try-catch", "throw", "assert", "All of the above"],
        correctAnswers: ["try-catch", "throw"],
        allowMultipleCorrect: true,
      },
      {
        questionText:
          "Which library must be included to use the std::cout object?",
        options: ["<iostream>", "<stdio.h>", "<string>", "<vector>"],
        correctAnswers: ["<iostream>"],
        allowMultipleCorrect: false,
      },
      {
        questionText:
          "Which of the following statements is true regarding destructors?",
        options: [
          "They cannot be overloaded",
          "They can take parameters",
          "They are called automatically",
          "Both A and C",
        ],
        correctAnswers: ["Both A and C"],
        allowMultipleCorrect: true,
      },
      {
        questionText: "What is the main purpose of using templates in C++?",
        options: [
          "To enable code reuse",
          "To define data types",
          "To create constructors",
          "None of the above",
        ],
        correctAnswers: ["To enable code reuse"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which of the following is not a type of constructor?",
        options: [
          "Default constructor",
          "Copy constructor",
          "Parameterized constructor",
          "Static constructor",
        ],
        correctAnswers: ["Static constructor"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "What is the syntax to define a class in C++?",
        options: [
          "class ClassName {}",
          "Class ClassName {}",
          "define ClassName {}",
          "None of the above",
        ],
        correctAnswers: ["class ClassName {}"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which keyword is used to inherit a class?",
        options: ["inherits", "extends", "is-a", "public"],
        correctAnswers: ["public"],
        allowMultipleCorrect: false,
      },
      {
        questionText:
          "What will happen if you do not provide a destructor for a class?",
        options: [
          "Memory leak",
          "Compilation error",
          "No effect",
          "Runtime error",
        ],
        correctAnswers: ["Memory leak"],
        allowMultipleCorrect: false,
      },
    ],
  },
  {
    name: "CSS",
    image: sampleQuizImage8,
    questions: [
      {
        questionText: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Colorful Style Sheets",
          "Computer Style Sheets",
          "Creative Style Sheets",
        ],
        correctAnswers: ["Cascading Style Sheets"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which property is used to change the background color?",
        options: ["bgcolor", "background-color", "color", "background"],
        correctAnswers: ["background-color", "background"],
        allowMultipleCorrect: true,
      },
      {
        questionText: "Which of the following is a valid CSS selector?",
        options: [".class", "#id", "element", "All of the above"],
        correctAnswers: ["All of the above"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "How do you select an element with the id 'header'?",
        options: ["#header", ".header", "header", "*header"],
        correctAnswers: ["#header"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which property controls the text size?",
        options: ["font-size", "text-size", "font-style", "text-style"],
        correctAnswers: ["font-size"],
        allowMultipleCorrect: false,
      },
      {
        questionText:
          "What is the correct CSS syntax to change the font of an element?",
        options: [
          "font-family: Arial;",
          "font: Arial;",
          "text-font: Arial;",
          "font-family: 'Arial';",
        ],
        correctAnswers: ["font-family: Arial;", "font-family: 'Arial';"],
        allowMultipleCorrect: true,
      },
      {
        questionText: "How do you apply a style to multiple elements?",
        options: [
          ".class1, .class2",
          ".class1.class2",
          "class1 class2",
          "#id1, #id2",
        ],
        correctAnswers: [".class1, .class2"],
        allowMultipleCorrect: false,
      },
      {
        questionText:
          "Which CSS property is used to create space between elements?",
        options: ["margin", "padding", "spacing", "Both margin and padding"],
        correctAnswers: ["Both margin and padding"],
        allowMultipleCorrect: true,
      },
      {
        questionText: "What does the z-index property control?",
        options: [
          "Element color",
          "Element stacking order",
          "Element size",
          "Element position",
        ],
        correctAnswers: ["Element stacking order"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which of the following units is relative?",
        options: ["px", "em", "cm", "in"],
        correctAnswers: ["em"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which property is used to change the text color?",
        options: ["color", "font-color", "text-color", "bgcolor"],
        correctAnswers: ["color"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "How do you center a block element in CSS?",
        options: [
          "margin: auto;",
          "text-align: center;",
          "align: center;",
          "center: block;",
        ],
        correctAnswers: ["margin: auto;"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "What does the display property do?",
        options: [
          "Defines how an element is displayed",
          "Sets an element's visibility",
          "Controls element overflow",
          "None of the above",
        ],
        correctAnswers: ["Defines how an element is displayed"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which of the following is not a CSS layout model?",
        options: ["Block", "Inline", "Grid", "Stack"],
        correctAnswers: ["Stack"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "What is the correct way to include a CSS file in HTML?",
        options: [
          '<link rel="stylesheet" href="styles.css">',
          '<stylesheet src="styles.css">',
          '<link src="styles.css">',
          '<style src="styles.css">',
        ],
        correctAnswers: ['<link rel="stylesheet" href="styles.css">'],
        allowMultipleCorrect: false,
      },
      {
        questionText: "What is the default value of the position property?",
        options: ["static", "relative", "absolute", "fixed"],
        correctAnswers: ["static"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which CSS property is used for rounding corners?",
        options: ["border-radius", "corner-radius", "border-corner", "radius"],
        correctAnswers: ["border-radius"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "How do you make a list with bullets in CSS?",
        options: [
          "list-style-type: none;",
          "list-style: bullet;",
          "list-style-type: disc;",
          "list: bullets;",
        ],
        correctAnswers: ["list-style-type: disc;"],
        allowMultipleCorrect: false,
      },
    ],
  },
  {
    name: "Cyber Security",
    image: sampleQuizImage9,
    questions: [
      {
        questionText: "What does the term 'phishing' refer to?",
        options: [
          "A method of stealing personal information through fake emails",
          "A type of malware",
          "A secure way to encrypt data",
          "A firewall configuration",
        ],
        correctAnswers: [
          "A method of stealing personal information through fake emails",
        ],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which of the following is a strong password?",
        options: ["123456", "password", "P@ssw0rd!", "abcd1234"],
        correctAnswers: ["P@ssw0rd!"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "What is a firewall?",
        options: [
          "A network security system that monitors and controls incoming and outgoing network traffic",
          "A type of encryption algorithm",
          "A physical device used to cool computers",
          "A form of malware",
        ],
        correctAnswers: [
          "A network security system that monitors and controls incoming and outgoing network traffic",
        ],
        allowMultipleCorrect: false,
      },
      {
        questionText:
          "Which of the following can be considered social engineering?",
        options: [
          "Phishing emails",
          "Shoulder surfing",
          "Pretexting",
          "All of the above",
        ],
        correctAnswers: ["All of the above"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "What is the purpose of encryption?",
        options: [
          "To secure data by converting it into a coded format",
          "To delete data permanently",
          "To compress data for storage",
          "To organize data",
        ],
        correctAnswers: ["To secure data by converting it into a coded format"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "What is two-factor authentication?",
        options: [
          "Using two passwords",
          "Verifying a user's identity using two different methods",
          "A way to encrypt data",
          "A method of data backup",
        ],
        correctAnswers: [
          "Verifying a user's identity using two different methods",
        ],
        allowMultipleCorrect: false,
      },
      {
        questionText: "What does the term 'malware' encompass?",
        options: ["Viruses", "Worms", "Trojans", "All of the above"],
        correctAnswers: ["All of the above"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "Which of the following is an example of a DDoS attack?",
        options: [
          "Overloading a server with requests from multiple sources",
          "Infecting a computer with a virus",
          "Intercepting communication",
          "Stealing personal data",
        ],
        correctAnswers: [
          "Overloading a server with requests from multiple sources",
        ],
        allowMultipleCorrect: false,
      },
      {
        questionText: "What is a VPN?",
        options: [
          "A Virtual Private Network that encrypts internet traffic",
          "A type of malware",
          "A security protocol",
          "A web browser",
        ],
        correctAnswers: [
          "A Virtual Private Network that encrypts internet traffic",
        ],
        allowMultipleCorrect: false,
      },
      {
        questionText:
          "What is a common way to protect against phishing attacks?",
        options: [
          "Clicking on links in emails",
          "Verifying the sender's email address",
          "Using the same password for multiple sites",
          "Ignoring all emails",
        ],
        correctAnswers: ["Verifying the sender's email address"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "What is the principle of least privilege?",
        options: [
          "Users should have only the minimum level of access necessary",
          "All users should have full access",
          "Access should be granted based on seniority",
          "Users should be able to access everything",
        ],
        correctAnswers: [
          "Users should have only the minimum level of access necessary",
        ],
        allowMultipleCorrect: false,
      },
      {
        questionText:
          "Which protocol is commonly used for secure data transmission?",
        options: ["HTTP", "FTP", "HTTPS", "SMTP"],
        correctAnswers: ["HTTPS"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "What is a zero-day exploit?",
        options: [
          "An attack that occurs on the same day a vulnerability is discovered",
          "A type of malware",
          "An outdated software",
          "A type of phishing attack",
        ],
        correctAnswers: [
          "An attack that occurs on the same day a vulnerability is discovered",
        ],
        allowMultipleCorrect: false,
      },
      {
        questionText: "What is an intrusion detection system (IDS)?",
        options: [
          "A device that monitors network traffic for suspicious activity",
          "A type of firewall",
          "A data backup solution",
          "A web browser",
        ],
        correctAnswers: [
          "A device that monitors network traffic for suspicious activity",
        ],
        allowMultipleCorrect: false,
      },
      {
        questionText:
          "Which of the following is an effective way to secure personal devices?",
        options: [
          "Regularly updating software",
          "Using public Wi-Fi without precautions",
          "Sharing passwords with friends",
          "Ignoring security settings",
        ],
        correctAnswers: ["Regularly updating software"],
        allowMultipleCorrect: false,
      },
      {
        questionText: "What is the main goal of cybersecurity?",
        options: [
          "To protect computer systems from theft or damage",
          "To create software",
          "To design websites",
          "To manage user accounts",
        ],
        correctAnswers: ["To protect computer systems from theft or damage"],
        allowMultipleCorrect: false,
      },
    ],
  },
];
