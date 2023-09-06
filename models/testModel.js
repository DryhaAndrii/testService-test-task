const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    answerText: String,
    isCorrect: Boolean,
});

const questionSchema = new mongoose.Schema({
    questionText: String,
    answers: [answerSchema],
});

const testSchema = new mongoose.Schema({
    testName: String,
    questions: [questionSchema],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    authorName: String,
    results: [
        {
            userLogin: String,
            score: Number,
            date: {
                type: Date,
                default: Date.now,
            },
            elapsedTime: Number
        },
    ],
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;