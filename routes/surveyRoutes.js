const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');

router.post('/', surveyController.submitSurvey);
router.get('/', surveyController.getAllSurveys); // Admin access

module.exports = router;
