const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Test = require('../models/testModel');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); 
require('dotenv').config();
const db = require('../db');

router.post('', async (req, res) => {
    const { testId, score, elapsedTime, token } = req.body;

    let userLogin = 'unauthorizedUser'; 

    if (token) {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        const userId = decodedToken.userId;

        const user = await User.findById(userId);

        if (user) {
            userLogin = user.login;
        }
    }

    const newResult = {
        score,
        elapsedTime,
        userLogin,
    };

    await Test.findByIdAndUpdate(
        testId,
        { $push: { results: newResult } }
    );

    return res.status(200).json({ message: 'Results succesfully saved' });
});

module.exports = router;