import React from "react";

function Answer({ answer, questionIndex, handleAnswerChange, handleCheckboxChange, answerIndex }) {
    return (
        <div className="answer">
            <input
                type="text"
                placeholder={`Answer ${answerIndex + 1}`} 
                value={answer.answerText}
                onChange={(e) =>
                    handleAnswerChange(questionIndex, answerIndex, e)
                }
            />
            <input
                type="checkbox"
                checked={answer.isCorrect}
                onChange={() => handleCheckboxChange(questionIndex, answerIndex)}
            />
        </div>
    );
}

export default Answer;