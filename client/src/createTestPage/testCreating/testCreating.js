import useStore from "../../store";
import React, { useState } from 'react';
import axios from "axios";
import Question from "./question/question";

function TestCreating() {
    const { setMessage, setLoading } = useStore();
    const [testData, setTestData] = useState({
        testName: '',
        questions: [],
    });

    const addQuestion = () => {
        if (testData.questions.length === 5) {
            setMessage('Maximum number of questions is 5')
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
            setTestData({
                ...testData,
                questions: [...testData.questions, newQuestion],
            });
        }
    };
    const handleDeleteQuestion = (questionIndex) => {
        const updatedQuestions = [...testData.questions];
        updatedQuestions.splice(questionIndex, 1); // Remove the question at the specified index

        setTestData({
            ...testData,
            questions: updatedQuestions,
        });
    };

    const handleTestNameChange = (e) => {
        if (e.target.value.length > 50) {
            setMessage('Too many characters');
        } else {
            setTestData({
                ...testData,
                testName: e.target.value,
            });
        }
    };

    const handleSubmit = () => {
        console.log(testData);
        const token = localStorage.getItem('token');
        const apiUrl = 'http://localhost:3001/api/test/create';

        setLoading(true);
        axios
            .post(apiUrl, { testData, token })
            .then((response) => {
                setLoading(false);
                setMessage(response.data.message);
                setTimeout(() => { window.location.href = 'http://localhost:3000'; }, 500);
            })
            .catch((error) => {
                console.error('Server error:', error);
                setLoading(false);
            });
    };

    return (
        <div className="testCreating">
            <input
                type="text"
                placeholder="Test Name"
                value={testData.testName}
                onChange={handleTestNameChange}
            />
            {testData.questions.map((question, questionIndex) => (
                <Question question={question}
                    testData={testData}
                    setTestData={setTestData}
                    questionIndex={questionIndex}
                    key={questionIndex}
                    handleDeleteQuestion={handleDeleteQuestion}
                />
            ))}
            <button onClick={addQuestion}>Add Question</button>
            <button onClick={handleSubmit}>Finish Test</button>
        </div>
    );
}

export default TestCreating;