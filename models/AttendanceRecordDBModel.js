// MongoDB model for Attendance Record
const mongoose = require('../config/dbConfig');

const attendanceRecordSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  clockInTime: Date,
  clockOutTime: Date,
  ip: String,
  latitude: Number,
  longitude: Number,
});

const AttendanceRecordDBModel = mongoose.model('AttendanceRecord', attendanceRecordSchema);

module.exports = AttendanceRecordDBModel;
