const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const app = express();
const surveyRoutes = require('./routes/surveyRoutes');


// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());



// Routes

app.use('/api/surveys', surveyRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
