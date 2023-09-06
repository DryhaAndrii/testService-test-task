const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/userModel'); 
const jwt = require('jsonwebtoken');

const db = require('../db');

router.get('', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];

    if (token === 'null') {
        return res.status(200).json({ message: 'No' });
    }


    try {
        const decoded = await jwt.verify(token, 'kek');
        const userId = decoded.userId;

        const user = await User.findById(userId);

        return res.status(200).json({ message: 'Yes',userId });
    } catch (err) {
        console.log(err);
        return res.status(200).json({ message: 'No' });
    }
});

module.exports = router;