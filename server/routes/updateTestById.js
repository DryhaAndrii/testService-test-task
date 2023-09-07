const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Test = require('../models/testModel');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const db = require('../db');

router.post('', async (req, res) => {

    try {
        const { testId, newQuestions, testName, description } = req.body;

        const existingTest = await Test.findById(testId);

        if (!existingTest) {
            return res.status(404).json({ error: 'Test not found' });
        }

        if (testName) {
            existingTest.testName = testName;
        }

        if (description) {
            existingTest.description = description;
        }

        existingTest.questions = newQuestions;
        existingTest.results = [];

        const updatedTest = await existingTest.save();

        return res.status(200).json({ message: 'Test successfully updated', test: updatedTest });


    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Test' });
    }

});

module.exports = router;