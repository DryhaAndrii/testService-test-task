import useStore from "../../store";
import React, { useState } from 'react';
import axios from "axios";
import Question from "./question/question";

const clientUrl = process.env.REACT_APP_CLIENT_URL;
const apiUrl = process.env.REACT_APP_API_URL;

function TestCreating() {
    const { setMessage, setLoading,setIsGoBack } = useStore();
    const [testData, setTestData] = useState({
        testName: '',
        questions: [],
        description: ''
    });

    const addQuestion = () => {
        if (testData.questions.length === 20) {
            setMessage('Maximum number of questions is 20')
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
        updatedQuestions.splice(questionIndex, 1);

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
    const handleTestDescriptionChange = (e) => {
        if (e.target.value.length > 50) {
            setMessage('Too many characters');
        } else {
            setTestData({
                ...testData,
                description: e.target.value,
            });
        }
    };

    const handleSubmit = () => {
        console.log(testData);
        const token = localStorage.getItem('token');
        const apiiUrl = `${apiUrl}test/create`;

        setLoading(true);
        axios
            .post(apiiUrl, { testData, token })
            .then((response) => {
                setLoading(false);
                setMessage(response.data.message);
                setIsGoBack(true);
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
            /><input
                type="text"
                placeholder="Test description"
                value={testData.description}
                onChange={handleTestDescriptionChange}
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