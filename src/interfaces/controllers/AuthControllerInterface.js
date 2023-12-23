// src/interfaces/controllers/AuthControllerInterface.js

class AuthControllerInterface {
    /**
     * Authenticate user based on username and password.
     * @param {string} username - User's username.
     * @param {string} password - User's password.
     * @returns {Promise<Object>} - A Promise resolving to the authentication result.
     */
    async authenticateUser(username, password) {
      // Implementation in concrete classes
    }
  
    // Other methods and properties specific to AuthControllerInterface
  }
  
  module.exports = AuthControllerInterface;
  