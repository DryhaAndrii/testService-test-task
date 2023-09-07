import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from '../../store';
import Question from './question';
const apiUrl = process.env.REACT_APP_API_URL;
const clientUrl = process.env.REACT_APP_CLIENT_URL;
function Test({ test, id }) {
    const { setLoading, setMessage,setIsGoBack } = useStore();
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [isTestLoaded, setIsTestLoaded] = useState(false);

    useEffect(() => {
        let id = null;

        if (isTestLoaded) {
            id = setInterval(() => {
                setTimeElapsed((prevTime) => prevTime + 1);
            }, 1000);

            setIntervalId(id);
        }

        return () => {
            clearInterval(id);
        };
    }, [isTestLoaded]);

    useEffect(() => {
        if (test) {
            setIsTestLoaded(true);
        }
    }, [test]);

    const handleAnswerChange = (questionIndex, answerIndex, isCorrect) => {
        setSelectedAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionIndex]: {
                [answerIndex]: !prevAnswers[questionIndex]?.[answerIndex],
            },
        }));
    };

    const handleSubmit = () => {
        const isAllQuestionsAnswered = (test.questions || []).every((question, questionIndex) => {
            return Object.keys(selectedAnswers[questionIndex] || {}).length > 0;
        });

        if (!isAllQuestionsAnswered) {
            setMessage('You should answer all questions');
            return;
        }
        let totalScore = 0;

        (test.questions || []).forEach((question, questionIndex) => {
            const selectedAnswerIndex = Object.keys(selectedAnswers[questionIndex] || {})[0];
            const selectedAnswer = question.answers[selectedAnswerIndex];

            if (selectedAnswer && selectedAnswer.isCorrect) {
                totalScore += 1;
            }
        });
        let score = (totalScore / test.questions.length) * 100;
        const token = localStorage.getItem('token');
        const postData = {
            testId: id,
            score: score,
            elapsedTime: timeElapsed,
            token: token
        };
        setLoading(true);
        axios
            .post(`${apiUrl}test/saveTestResultsById`, postData)
            .then((response) => {
                setLoading(false);
                setMessage(`${response.data.message} Your score is ${score}`);
                setIsGoBack(true);
                clearInterval(intervalId);
            })
            .catch((error) => {
                setLoading(false);
                console.error('Server load error', error);
            });
    };
    return (
        <div className="testContainer">
            <p className="testTime">Затраченное время (секунды): {timeElapsed}</p>
            {(test.questions || []).map((question, questionIndex) => (
                <Question
                    key={questionIndex}
                    question={question}
                    handleAnswerChange={handleAnswerChange}
                    selectedAnswers={selectedAnswers}
                    questionIndex={questionIndex}
                />
            ))}
            <button className="submit-button" onClick={handleSubmit}>Send answers</button>
        </div>
    );
}

export default Test;