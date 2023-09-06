const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const db = require('../db');
const User = require('../models/userModel'); 

router.post('', async (req, res) => {
    const { login, password } = req.body;
    
    try {
        const user = await User.findOne({ login });
        console.log(login,password);
        if (!user) {
            return res.status(200).json({ message: 'There are no user with this login' });
        }

        if (user.password !== password) {
            return res.status(200).json({ message: 'Wrong password' });
        }

        const token = generateToken(user);


        return res.json({ token });
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(500).json({ message: 'Authentication error' });
    }
});

function generateToken(user) {
    const secretKey = 'kek';

    const payload = {
        userId: user._id,
    };

    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    return token;
}

module.exports = router;