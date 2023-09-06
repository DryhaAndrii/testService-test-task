const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Test = require('../models/testModel');
const jwt = require('jsonwebtoken');

const db = require('../db');

router.get('', async (req, res) => {
    try {
        const { token } = req.query; 
        if (!token) {
            return res.status(401).json({ message: 'Token isnt exist' });
        }

        const decodedToken = jwt.verify(token, 'kek');

        const userId = decodedToken.userId;

        const tests = await Test.find({ createdBy: userId });

        return res.status(200).json(tests);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;