import Answer from "./answer";

function Question({ handleAnswerChange, question, selectedAnswers,questionIndex }) {
    return (
        <div className="question">
            <h3>{question.questionText}</h3>
            <ul>
                {(question.answers || []).map((answer, answerIndex) => (
                    <Answer
                        key={answerIndex}
                        selectedAnswers={selectedAnswers}
                        answerIndex={answerIndex}
                        answer={answer}
                        handleAnswerChange={handleAnswerChange}
                        questionIndex={questionIndex}
                    />
                ))}
            </ul>
        </div>
    )
}
export default Question;