const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Test = require('../models/testModel');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const db = require('../db');

router.post('', async (req, res) => {
    const { testName, questions } = req.body.testData;
    const token = req.body.token;

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const user = await User.findOne({ _id: userId });
    const authorName = user.login;

    const newTest = new Test({
        testName: testName,
        authorName,
        createdBy: userId,
        questions: questions.map((question) => ({
            questionText: question.questionText,
            answers: question.answers.map((answer) => ({
                answerText: answer.answerText,
                isCorrect: answer.isCorrect,
            })),
        })),
        results: []
    });

    try {
        const savedTest = await newTest.save();
        res.status(200).json({ message: 'Test saved' });
    } catch (err) {
        console.error('Test save error:', err);
        res.status(500).json({ error: 'Test save error' });
    }
});
module.exports = router;