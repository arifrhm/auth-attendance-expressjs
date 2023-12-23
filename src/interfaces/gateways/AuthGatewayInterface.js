// src/interfaces/gateways/AuthGatewayInterface.js

class AuthGatewayInterface {
    /**
     * Find user in the database based on username and password.
     * @param {string} username - User's username.
     * @param {string} password - User's password.
     * @returns {Promise<Object>} - A Promise resolving to the user found in the database.
     */
    async findUserByUsernameAndPassword(username, password) {
      // Implementation in concrete classes
    }
  
    // Other methods and properties specific to AuthGatewayInterface
  }
  
  module.exports = AuthGatewayInterface;
  