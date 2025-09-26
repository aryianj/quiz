import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [gameState, setGameState] = useState(0); // 0 = start, 1 = quiz, 7 = end

  const statements = [
    {statement: "Do you know me at all?"},
    {statement: "You can do better than that!"},
    {statement: "Mid..."},
    {statement: "Okay, I guess you know me kinda..."},
    {statement: "You passed! I love you!"},
  ];

  const questions = [
    {question: "Question 1: Where am I from?", options: [
      {option: "A. Oregon", isCorrect: false},
      {option: "B. Florida", isCorrect: false},
      {option: "C. Oklahoma", isCorrect: false},
      {option: "D. Ohio", isCorrect: true},
      {option: "E. California", isCorrect: false},
      {option: "F. Texas", isCorrect: false},
    ]},
    {question: "Question 2: What is my favorite color?", options: [
      {option: "A. Red", isCorrect: false},
      {option: "B. Blue", isCorrect: true},
      {option: "C. Green", isCorrect: false},
      {option: "D. Yellow", isCorrect: false},
      {option: "E. Purple", isCorrect: false},
      {option: "F. Orange", isCorrect: false},
    ]},
    {question: "Question 3: What is my favorite food?", options: [
      {option: "A. Pizza", isCorrect: false},   
      {option: "B. Sushi", isCorrect: false},
      {option: "C. Burger", isCorrect: false},
      {option: "D. Salad", isCorrect: false},
      {option: "E. Pasta", isCorrect: true},
      {option: "F. Tacos", isCorrect: false},
  ]},
    {question: "Question 4: What is my favorite city?", options: [
      {option: "A. San Francisco", isCorrect: false},
      {option: "B. Santa Cruz", isCorrect: false},
      {option: "C. Los Angeles", isCorrect: true},
      {option: "D. San Diego", isCorrect: false},
      {option: "E. Dublin", isCorrect: false},
      {option: "F. Cleveland", isCorrect: false},
    ]},
    {question: "Question 5: What is my favorite nickname?", options: [
      {option: "A. Ryan", isCorrect: false},
      {option: "B. Ry", isCorrect: true},
      {option: "C. Ry-ry", isCorrect: false},
      {option: "D. Jones", isCorrect: false},
      {option: "E. Ary", isCorrect: false},
      {option: "F. AJ", isCorrect: false},
    ]},
    {question: "Question 6: What is my ultimate life goal? (This ones hard.)", options: [
      {option: "A. Write a book under a pseudonym", isCorrect: true},
      {option: "B. Travel the world", isCorrect: false},
      {option: "C. My own apartment in the city with a cat with a Mazda", isCorrect: false},
    ]},
  ]

  return (
    <>
     <div><img src="/grain.png" alt="" className="absolute w-full h-full mix-blend-plus-darker opacity-7 pointer-events-none" /></div>
      {gameState === 0 && (
      <div className="p-3 bg-gradient-to-b from-gray-900 to-gray-500 w-screen h-screen">
        <div className="h-full w-full flex flex-col bg-gray-100 rounded-lg p-6 shadow-lg">
          <p>Score: {count}/6</p>
          <div className='w-full h-full flex flex-col justify-center items-center'>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to The Quiz</h1>
            <p className="mb-2 text-gray-800">Try to pass the quiz, if you dare.</p>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-950 transition" onClick={() => setGameState(gameState + 1)}>
              Continue
            </button>
          </div>
        </div>
      </div>
      )}
      {gameState > 0 && gameState < 7 && (
      <div className="p-3 bg-gradient-to-b from-gray-900 to-gray-500 w-screen h-screen">
        <div className="h-full w-full flex flex-col bg-gray-100 rounded-lg p-6 shadow-lg">
          <p>Score: {count}/6</p>
          <div className='w-full h-full flex flex-col justify-center items-center'>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{questions[gameState - 1].question}</h1>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {questions[gameState - 1].options.map((q, index) => (
                  <button key={index} className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-950 transition" onClick={() => {setGameState(gameState + 1); if (q.isCorrect) {setCount(count + 1)}}}>
                    {q.option}
                  </button>
                ))}
              </div>
          </div>
        </div>
      </div>
      )}
      {gameState === 7 && (
      <div className="p-3 bg-gradient-to-b from-gray-900 to-gray-500 w-screen h-screen">
        <div className="h-full w-full flex flex-col bg-gray-100 rounded-lg p-6 shadow-lg">
          <div className='w-full h-full flex flex-col justify-center items-center'>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Final Score:</h1>
            <p className="text-2xl font-semibold text-gray-800">{statements[count].statement}</p>
            <p className="text-2xl font-semibold text-gray-800">You scored <span className="text-blue-600">{count}</span> out of 6!</p>
             <button className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-950 transition" onClick={() => {setGameState(0); setCount(0)}}>
              Restart
            </button>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default App
