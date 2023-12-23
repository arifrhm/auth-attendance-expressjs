// src/interfaces/controllers/AttendanceControllerInterface.js

class AttendanceControllerInterface {
    /**
     * Clock in the user and record attendance details.
     * @param {string} userId - User's ID.
     * @param {string} clockInTime - Time of clock in.
     * @param {string} ip - User's IP address.
     * @param {number} latitude - User's latitude location.
     * @param {number} longitude - User's longitude location.
     * @returns {Promise<Object>} - A Promise resolving to the clock-in result.
     */
    async clockIn(userId, clockInTime, ip, latitude, longitude) {
      // Implementation in concrete classes
    }
  
    /**
     * Clock out the user and update attendance details.
     * @param {string} userId - User's ID.
     * @param {string} clockOutTime - Time of clock out.
     * @param {string} ip - User's IP address.
     * @param {number} latitude - User's latitude location.
     * @param {number} longitude - User's longitude location.
     * @returns {Promise<Object>} - A Promise resolving to the clock-out result.
     */
    async clockOut(userId, clockOutTime, ip, latitude, longitude) {
      // Implementation in concrete classes
    }
  
    // Other methods and properties specific to AttendanceControllerInterface
  }
  
  module.exports = AttendanceControllerInterface;
  