// src/interfaces/gateways/AttendanceGatewayInterface.js

class AttendanceGatewayInterface {
  /**
   * Create a new attendance record in the database for clock-in.
   * @param {string} userId - User's ID.
   * @param {string} clockInTime - Time of clock in.
   * @param {string} ip - User's IP address.
   * @param {number} latitude - User's latitude location.
   * @param {number} longitude - User's longitude location.
   * @returns {Promise<void>} - A Promise indicating the success of creating the attendance record.
   */
  async createAttendanceRecord(userId, clockInTime, ip, latitude, longitude) {
    // Implementation in concrete classes
  }

  /**
   * Find the last attendance record for a user in the database.
   * @param {string} userId - User's ID.
   * @returns {Promise<Object>} - A Promise resolving to the last attendance record found in the database.
   */
  async findLastAttendanceRecordByUserId(userId) {
    // Implementation in concrete classes
  }

  // Other methods and properties specific to AttendanceGatewayInterface
}

module.exports = AttendanceGatewayInterface;
