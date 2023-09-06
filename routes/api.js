// server/routes/api.js
const express = require('express');
const router = express.Router();
const register = require('./registerRouter')
const login = require('./loginRoutes');
const getUserInfo = require('./getUserInfoRouter');
const createTest = require('./createTestRouter');
const checkTokenExpire = require('./checkTokenExpire');
const getTestRouter = require('./getTestRouter');
const getTestByIdRouter = require('./getTestByIdRouter');
const saveTestResultsById = require('./saveTestResultsById');
const getTestsByUserId = require('./getTestsByUserIdRouter')
const updateTestMyId = require('./updateTestById');

router.use('/register', register);
router.use('/login', login);
router.use('/user/getInfo', getUserInfo);
router.use('/test/create', createTest);
router.use('/checkTokenExpire', checkTokenExpire);
router.use('/test/getTest', getTestRouter);
router.use('/test/getTestById', getTestByIdRouter);
router.use('/test/saveTestResultsById', saveTestResultsById);
router.use('/test/getTestsByUserId', getTestsByUserId);
router.use('/test/updateTestById', updateTestMyId);
module.exports = router;

