const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const db = require('../db');

router.get('', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];

    if (token === 'null') {
        return res.status(200).json({ message: 'Token is not exist' });
    }


    try {
        const decoded = await jwt.verify(token, 'kek');
        const userId = decoded.userId;

        const user = await User.findById(userId);

        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(200).json({ message: 'Token is not valid' });
    }
});

module.exports = router;