import useStore from "../../../../store";
function Answer({testData,setTestData, answer, answerIndex, questionIndex }) {
    const { setMessage } = useStore();

    const handleAnswerTextChange = (e, questionIndex, answerIndex) => {
        if (e.target.value.length > 120) {
            setMessage('Too many characters');
        } else {
            const updatedQuestions = [...testData.questions];
            updatedQuestions[questionIndex].answers[answerIndex].answerText = e.target.value;

            setTestData({
                ...testData,
                questions: updatedQuestions,
            });
        }
    };

    const handleCorrectAnswerChange = (questionIndex, answerIndex) => {
        const updatedQuestions = [...testData.questions];
        updatedQuestions[questionIndex].answers.forEach((answer, idx) => {
            answer.isCorrect = idx === answerIndex;
        });
        setTestData({
            ...testData,
            questions: updatedQuestions,
        });
    };

    return (
        <div className="answer" >
            <input
                type="text"
                placeholder={`Answer ${answerIndex + 1}`}
                value={answer.answerText}
                onChange={(e) => handleAnswerTextChange(e, questionIndex, answerIndex)}
            />
            <input
                type="checkbox"
                checked={answer.isCorrect}
                onChange={() => handleCorrectAnswerChange(questionIndex, answerIndex)}
            />
        </div>
    )
}
export default Answer;