import Answer from "./answer";

function Question({ questionIndex, question, handleQuestionChange, handleAnswerChange, handleCheckboxChange, handleDeleteQuestion }) {
    return (
        <div className="question">
            <h1>{questionIndex + 1}</h1>
            <input
                type="text"
                placeholder={`Question ${questionIndex + 1}`} 
                value={question.questionText}
                onChange={(e) => handleQuestionChange(questionIndex, e)}
            />
            {question.answers.map((answer, answerIndex) => (
                <Answer
                    key={answerIndex}
                    answer={answer}
                    questionIndex={questionIndex}
                    answerIndex={answerIndex}
                    handleAnswerChange={handleAnswerChange}
                    handleCheckboxChange={handleCheckboxChange}
                />
            ))}
            <button onClick={() => handleDeleteQuestion(questionIndex)}>Delete Question</button>
        </div>
    );
}

export default Question;