import React, { useState } from "react";
import Question from "./question";
import useStore from "../../store";
import axios from "axios";
function Update({ testObject }) {
    const { setMessage } = useStore()
    const [questions, setQuestions] = useState(
        testObject.questions.map((question) => ({
            ...question,
        }))
    );
    const handleQuestionChange = (index, e) => {
        if (e.target.value.length > 50) {
            setMessage('Too many characters');
        } else {
            const updatedQuestions = [...questions];
            updatedQuestions[index].questionText = e.target.value;
            setQuestions(updatedQuestions);
        }
    };

    const handleAnswerChange = (questionIndex, answerIndex, e) => {
        if (e.target.value.length > 50) {
            setMessage('Too many characters');
        } else {
            const updatedQuestions = [...questions];
            updatedQuestions[questionIndex].answers[answerIndex].answerText =
                e.target.value;
            setQuestions(updatedQuestions);
        }

    };

    const handleCheckboxChange = (questionIndex, answerIndex) => {
        const updatedQuestions = [...questions];
        const selectedQuestion = updatedQuestions[questionIndex];

        selectedQuestion.answers.forEach((answer, index) => {
            if (index === answerIndex) {
                answer.isCorrect = true;
            } else {
                answer.isCorrect = false;
            }
        });

        setQuestions(updatedQuestions);
    };

    const handleSave = async () => {
        try {
            const requestData = {
                testId: testObject._id,
                newQuestions: questions,
            };

            const response = await axios.post('http://localhost:3001/api/test/updateTestById', requestData);

            if (response.status === 200) {
                setMessage('Questions updated successfully');
                setTimeout(() => { window.location.href = 'http://localhost:3000/testsDetails/'; }, 500);
                console.log('Questions updated successfully');
            } else {
                console.error('Failed to update questions');
            }
        } catch (error) {
            console.error('An error occurred while updating questions:', error);
        }
    };
    const handleDeleteQuestion = (questionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions.splice(questionIndex, 1);

        setQuestions(updatedQuestions);
    };
    const handleAddQuestion = () => {
        if (questions.length === 20) {
            setMessage('Maximum number of questions is 20');
        } else {
            const newQuestion = {
                questionText: '',
                answers: [
                    { answerText: '', isCorrect: true },
                    { answerText: '', isCorrect: false },
                    { answerText: '', isCorrect: false },
                    { answerText: '', isCorrect: false },
                ],
            };

            setQuestions([...questions, newQuestion]);
        }
    };

    return (
        <div className="update">
            {questions.map((question, questionIndex) => (
                <Question
                    key={questionIndex}
                    questionIndex={questionIndex}
                    question={question}
                    handleQuestionChange={handleQuestionChange}
                    handleAnswerChange={handleAnswerChange}
                    handleCheckboxChange={handleCheckboxChange}
                    handleDeleteQuestion={handleDeleteQuestion}
                />
            ))}
            <div className="buttons">
                <button onClick={handleSave}>Save</button>
                <button onClick={handleAddQuestion}>Add question</button>
            </div>

        </div>
    );
}

export default Update;
