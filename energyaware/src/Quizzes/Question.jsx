import React from "react";
import "./Question.css";

const Question = (props) => {
  const { question, choices, handleAnswer } = props;
  return (
    <div className="question-card">
      <p className="question">{question}</p>
      <div className="question-options">
        {choices.map((choice, index) => (
          <button
            className="question-option"
            key={index}
            onClick={() => handleAnswer(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
