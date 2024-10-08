import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MobileScreen = ({ question, onCorrectAnswer }) => {
    const [playerName, setPlayerName] = useState("");
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleAnswerSubmission = () => {
        if (selectedAnswer === question.correctAnswer) {
            onCorrectAnswer(playerName); // Notify computer screen of the winner
            setMessage("Correct! Congratulations!");
            setTimeout(() => navigate("/"), 3000); // Return to home after 3 seconds
        } else {
            setMessage("Wrong answer. Try again.");
        }
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Mobile Screen</h1>
            {!playerName ? (
                <>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                    />
                    <button onClick={() => setPlayerName(playerName)}>Join</button>
                </>
            ) : (
                <>
                    <h2>{question.question}</h2>
                    <ul>
                        {question.options.map((option, index) => (
                            <li key={index}>
                                <label>
                                    <input
                                        type="radio"
                                        name="answer"
                                        value={option[0]} // Only store the letter (A, B, etc.)
                                        onChange={(e) => setSelectedAnswer(e.target.value)}
                                    />
                                    {option}
                                </label>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleAnswerSubmission}>Submit Answer</button>
                    {message && <p>{message}</p>}
                </>
            )}
        </div>
    );
};

export default MobileScreen;
