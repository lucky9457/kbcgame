import React from "react";
import QRCode from "react-qr-code"; // Changed the import

const ComputerScreen = ({ questions, currentQuestionIndex, winner }) => {
    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div style={{ textAlign: "center" }}>
            <h1>KBC Game</h1>
            <h2>Question: {currentQuestion.question}</h2>
            <ul>
                {currentQuestion.options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>

            {winner && <h3>Congratulations {winner}!</h3>}

            <div style={{ marginTop: "20px" }}>
                <h4>Scan to join the game:</h4>
                <QRCode value={`${window.location.origin}/mobile`} />
            </div>
        </div>
    );
};

export default ComputerScreen;
