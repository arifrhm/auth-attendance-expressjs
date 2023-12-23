// src/applications/use-cases/AttendanceUseCase.js

class AttendanceUseCase {
    constructor(attendanceGateway) {
      this.attendanceGateway = attendanceGateway;
    }
  
    async clockIn(userId, clockInTime, ip, latitude, longitude) {
      try {
        // Use the AttendanceGateway to create a new attendance record for clock-in
        await this.attendanceGateway.createAttendanceRecord(userId, clockInTime, ip, latitude, longitude);
  
        return { success: true, message: 'Clock In successful' };
      } catch (error) {
        console.error(error);
        throw new Error('Error processing clock-in');
      }
    }
  
    async clockOut(userId, clockOutTime, ip, latitude, longitude) {
      try {
        // Use the AttendanceGateway to find the last attendance record and update clock-out details
        const lastRecord = await this.attendanceGateway.findLastAttendanceRecordByUserId(userId);
  
        if (!lastRecord) {
          return { success: false, message: 'User has not clocked in yet' };
        }
  
        lastRecord.clockOutTime = clockOutTime;
        lastRecord.ip = ip;
        lastRecord.latitude = latitude;
        lastRecord.longitude = longitude;
  
        await lastRecord.save();
  
        return { success: true, message: 'Clock Out successful' };
      } catch (error) {
        console.error(error);
        throw new Error('Error processing clock-out');
      }
    }
  }
  
  module.exports = AttendanceUseCase;
  