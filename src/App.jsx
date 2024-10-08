import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ComputerScreen from "./components/ComputerScreen";

import MobileScreen from "./components/MobileScreen";

// Sample questions
const sampleQuestions = [
  {
    question: "What is the capital of France?",
    options: ["A) Paris", "B) Berlin", "C) Madrid", "D) Rome"],
    correctAnswer: "A",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["A) Dickens", "B) Shakespeare", "C) Hemingway", "D) Orwell"],
    correctAnswer: "B",
  },
  // Add more sample questions here
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleCorrectAnswer = (playerName) => {
    setWinner(playerName);
    setTimeout(() => {
      setWinner(null); // Reset winner
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // Move to next question
    }, 3000); // Display winner for 3 seconds
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ComputerScreen
              questions={sampleQuestions}
              currentQuestionIndex={currentQuestionIndex}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              winner={winner}
            />
          }
        />
        <Route
          path="/mobile"
          element={
            <MobileScreen
              question={sampleQuestions[currentQuestionIndex]}
              onCorrectAnswer={handleCorrectAnswer}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
