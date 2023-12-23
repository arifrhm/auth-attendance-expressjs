// src/applications/use-cases/AuthUseCase.js

class AuthUseCase {
    constructor(authGateway) {
      this.authGateway = authGateway;
    }
  
    async authenticateUser(username, password) {
      try {
        // Use the AuthGateway to find the user by username and password
        const user = await this.authGateway.findUserByUsernameAndPassword(username, password);
  
        if (user) {
          return { success: true, user };
        } else {
          return { success: false, message: 'Invalid credentials' };
        }
      } catch (error) {
        console.error(error);
        throw new Error('Error authenticating user');
      }
    }
  }
  
  module.exports = AuthUseCase;
  