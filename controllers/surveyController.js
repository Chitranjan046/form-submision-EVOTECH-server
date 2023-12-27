const Survey = require('../models/Survey');

exports.submitSurvey = async (req, res) => {
  try {
    const survey = new Survey(req.body);
    await survey.save();
    res.status(201).json({ message: 'Survey submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.getAllSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.status(200).json(surveys);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
