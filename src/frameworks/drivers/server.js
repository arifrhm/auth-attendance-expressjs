const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mongoose = require('../../../config/dbConfig'); // Import MongoDB configuration
const AuthController = require('../../adapters/controllers/AuthController');
const AttendanceController = require('../../adapters/controllers/AttendanceController');

const app = express();
const port = 3000;

// Initialize controllers
const authController = new AuthController();
const attendanceController = new AttendanceController();

app.use(bodyParser.json());

// Set up routes
app.post('/auth/login', authController.login);
app.post('/attendance/clock-in', attendanceController.clockIn);
app.post('/attendance/clock-out', attendanceController.clockOut);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
