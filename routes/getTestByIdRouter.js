const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Test = require('../models/testModel');
const jwt = require('jsonwebtoken');

const db = require('../db');

router.get('/:id', async (req, res) => {
    try {
      const testId = req.params.id;
  
      const test = await Test.findById(testId);
  
      if (!test) {
        return res.status(404).json({ message: 'Test found error' });
      }
  
      res.json(test);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;