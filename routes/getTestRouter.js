const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Test = require('../models/testModel');
const jwt = require('jsonwebtoken');

const db = require('../db');

router.get('', async (req, res) => {
    try {
      const tests = await Test.find();
      
      res.json(tests);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Tests request error.' });
    }
  });
  
  module.exports = router;