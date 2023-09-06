import Answer from "./answer/answer";
import useStore from "../../../store";

function Question({ testData, setTestData, question, questionIndex,handleDeleteQuestion }) {
    const { setMessage } = useStore();

    const handleQuestionTextChange = (e, questionIndex) => {
        if (e.target.value.length > 50) {
            setMessage('Too many characters');
        } else {
            const updatedQuestions = [...testData.questions];
            updatedQuestions[questionIndex].questionText = e.target.value;

            setTestData({
                ...testData,
                questions: updatedQuestions,
            });
        }
    };
    return (
        <div className="question">
            <input
                type="text"
                placeholder={`Question ${questionIndex + 1}`}
                value={question.questionText}
                onChange={(e) => handleQuestionTextChange(e, questionIndex)}
            />
            {question.answers.map((answer, answerIndex) => (
                <Answer
                    testData={testData}
                    setTestData={setTestData}
                    answer={answer}
                    key={answerIndex}
                    answerIndex={answerIndex}
                    questionIndex={questionIndex}
                />
            ))}
            <button onClick={() => handleDeleteQuestion(questionIndex)}>Delete Question</button>
        </div>
    );
}
export default Question;