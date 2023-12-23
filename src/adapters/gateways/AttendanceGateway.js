// src/adapters/gateways/AttendanceGateway.js

const AttendanceRecordDBModel = require('../../models/AttendanceRecordDBModel');

class AttendanceGateway {
  async createAttendanceRecord(userId, clockInTime, ip, latitude, longitude) {
    try {
      // Create a new attendance record in the database
      const newRecord = new AttendanceRecordDBModel({
        userId,
        clockInTime,
        ip,
        latitude,
        longitude,
      });

      await newRecord.save();
    } catch (error) {
      console.error(error);
      throw new Error('Error creating attendance record in the database');
    }
  }

  async findLastAttendanceRecordByUserId(userId) {
    try {
      // Find the last attendance record for a user in the database
      const lastRecord = await AttendanceRecordDBModel.findOne({
        userId,
      }).sort({ clockInTime: -1 });

      return lastRecord;
    } catch (error) {
      console.error(error);
      throw new Error('Error finding last attendance record in the database');
    }
  }
}

module.exports = AttendanceGateway;
