// src/entities/AttendanceRecord.js

class AttendanceRecord {
    constructor(userId, clockInTime, clockOutTime, ip, latitude, longitude) {
      this.userId = userId;
      this.clockInTime = clockInTime;
      this.clockOutTime = clockOutTime;
      this.ip = ip;
      this.latitude = latitude;
      this.longitude = longitude;
    }
  }
  
  module.exports = AttendanceRecord;
  