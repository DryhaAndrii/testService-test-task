const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Test = require('../models/testModel');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const db = require('../db');

router.post('', async (req, res) => {

    try {
        const { testId } = req.body;
        console.log('deleting', testId);
        const deletedTest = await Test.deleteOne({ _id: testId });

        if (deletedTest.deletedCount === 0) {
            return res.status(404).json({ error: 'Test not founded' });
        }

        return res.status(200).json({ message: 'Test successfully deleted' });

    }

    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Test' });
    }

});

module.exports = router;