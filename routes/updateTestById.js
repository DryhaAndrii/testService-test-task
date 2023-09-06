const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Test = require('../models/testModel');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Подключите модель пользователя

const db = require('../db');

router.post('', async (req, res) => {

    try {
        // Получите данные из запроса, включая id теста и новый массив вопросов
        const { testId, newQuestions } = req.body;

        // Проверьте, есть ли тест с указанным id
        const existingTest = await Test.findById(testId);

        if (!existingTest) {
            return res.status(404).json({ error: 'Тест не найден' });
        }

        // Обновите массив вопросов в существующем тесте
        existingTest.questions = newQuestions;

        // Сбросьте массив results (присвойте ему пустой массив)
        existingTest.results = [];

        // Сохраните обновленный тест в базе данных
        const updatedTest = await existingTest.save();

        return res.status(200).json({ message: 'Массив вопросов и результаты успешно обновлены', test: updatedTest });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Произошла ошибка при обновлении массива вопросов и результатов' });
    }

});

module.exports = router;