
function Answer({ questionIndex, selectedAnswers, answerIndex, answer, handleAnswerChange, }) {
    return (
        <li className="answer">
            <label>
                <input
                    type="radio"
                    name={`question-${questionIndex}`}
                    checked={selectedAnswers[questionIndex]?.[answerIndex] || false}
                    onChange={() => handleAnswerChange(questionIndex, answerIndex, answer.isCorrect)}
                />
                {answer.answerText}
            </label>
        </li>
    )
}
export default Answer;