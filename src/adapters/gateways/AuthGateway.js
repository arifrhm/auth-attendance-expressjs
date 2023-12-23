// src/adapters/gateways/AuthGateway.js

const UserDBModel = require('../../models/UserDBModel');

class AuthGateway {
  async findUserByUsernameAndPassword(username, password) {
    try {
      // Find user in the database based on username and password
      const user = await UserDBModel.findOne({ username, password });
      return user;
    } catch (error) {
      console.error(error);
      throw new Error('Error finding user in the database');
    }
  }
}

module.exports = AuthGateway;
