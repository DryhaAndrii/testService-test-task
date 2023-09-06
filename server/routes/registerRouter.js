const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/userModel'); 

const db = require('../db');

router.post('', (req, res) => {
    const user = req.body;

    User.findOne({ login: user.login })
        .then(existingUser => {
            if (existingUser) {
                res.status(200).send('User with this login already exists');
            } else {
                const newUser = new User({
                    login: user.login,
                    password: user.password,
                });

                newUser.save()
                    .then(result => {
                        console.log('User sucessfully saved:', result);
                        res.send('User sucessfully saved');
                    })
                    .catch(error => {
                        console.error('error:', error);
                        res.status(500).send('User save error');
                    });
            }
        })
        .catch(error => {
            console.error('User login error:', error);
            res.status(500).send('User login error');
        });
});

module.exports = router;