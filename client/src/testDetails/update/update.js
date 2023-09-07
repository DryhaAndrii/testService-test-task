import React, { useState } from "react";
import Question from "./question";
import useStore from "../../store";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const clientUrl = process.env.REACT_APP_CLIENT_URL;

function Update({ testObject }) {
    const { setMessage, setIsGoBack, setLoading } = useStore()
    const [testName, setTestName] = useState(testObject.testName);
    const [description, setDescription] = useState(testObject.description);
    const [questions, setQuestions] = useState(
        testObject.questions.map((question) => ({
            ...question,
        }))
    );
    const handleTestNameChange = (e) => {
        if (e.target.value.length > 50) {
            setMessage('Too many characters')
        } else {
            setTestName(e.target.value);
        }
    };

    const handleDescriptionChange = (e) => {
        if (e.target.value.length > 50) {
            setMessage('Too many characters')
        } else {
            setDescription(e.target.value);
        }
    };
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
        const hasEmptyFields = questions.some(question => {
            return (
                question.questionText.trim() === '' ||
                question.answers.some(answer => answer.answerText.trim() === '')
            );
        });

        if (hasEmptyFields || testName === '' || description === '') {
            setMessage('You can not send empty fields')
            return; 
        }
        if (questions.length === 0) {
            setMessage('You can not create test with 0 questions');
            return;
        }

        try {
            const requestData = {
                testId: testObject._id,
                testName: testName,
                description: description,
                newQuestions: questions,
            };
            setLoading(true);
            const response = await axios.post(`${apiUrl}test/updateTestById`, requestData);

            if (response.status === 200) {
                setLoading(false);
                setMessage('Test updated successfully');
                setIsGoBack(true);
                console.log('Test updated successfully');
            } else {
                setLoading(false);
                console.error('Failed to update test');
            }
        } catch (error) {
            console.error('An error occurred while updating test:', error);
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
    const deleteTest = async () => {
        try {
            const requestData = {
                testId: testObject._id,
                isDelete: true
            };
            setLoading(true);
            const response = await axios.post(`${apiUrl}test/updateTestById`, requestData);

            if (response.status === 200) {
                setLoading(false);
                setMessage(`Test deleted`);
                setIsGoBack(true);
            } else {
                setLoading(false);
                console.error('Failed to delete questions');
            }
        } catch (error) {
            console.error('An error occurred while deleting questions:', error);
        }
    }

    return (
        <>
            <div className="inputs">
                <input
                    className="testNameInput"
                    type="text"
                    placeholder="Test Name"
                    value={testName}
                    onChange={handleTestNameChange}
                />

                <input
                    className="descriptionInput"
                    placeholder="Description"
                    value={description}
                    onChange={handleDescriptionChange}
                />
            </div>
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
                    <button onClick={deleteTest}>Delete test</button>
                </div>

            </div>

        </>

    );
}

export default Update;
