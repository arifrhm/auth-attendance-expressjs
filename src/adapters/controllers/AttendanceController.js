// src/adapters/controllers/AttendanceController.js

const AttendanceRecordDBModel = require('../../../models/AttendanceRecordDBModel');

class AttendanceController {
  async clockIn(req, res) {
    const { ip, latitude, longitude } = req.body;

    try {
      // Create a new attendance record in the database for clock-in
      const newRecord = new AttendanceRecordDBModel({
        userId: req.user._id, // Assuming user information is available in req.user after authorization
        clockInTime: new Date(),
        ip,
        latitude,
        longitude,
      });

      await newRecord.save();

      console.log('Clock In successful:', { ip, latitude, longitude });

      res.json({ message: 'Clock In successful', ip, latitude, longitude });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async clockOut(req, res) {
    const { ip, latitude, longitude } = req.body;

    try {
      // Find the last attendance record for the user and update clock-out time
      const lastRecord = await AttendanceRecordDBModel.findOne({
        userId: req.user._id,
      }).sort({ clockInTime: -1 });

      if (!lastRecord) {
        return res.status(400).json({ message: 'User has not clocked in yet' });
      }

      lastRecord.clockOutTime = new Date();
      lastRecord.ip = ip;
      lastRecord.latitude = latitude;
      lastRecord.longitude = longitude;

      await lastRecord.save();

      console.log('Clock Out successful:', { ip, latitude, longitude });

      res.json({ message: 'Clock Out successful', ip, latitude, longitude });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = AttendanceController;
