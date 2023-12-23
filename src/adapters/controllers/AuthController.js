// src/adapters/controllers/AuthController.js

const jwt = require('jsonwebtoken');
const UserDBModel = require('../../../models/UserDBModel');

class AuthController {
  async login(req, res) {
    const { username, password } = req.body;

    try {
      const user = await UserDBModel.findOne({ username, password });

      if (user) {
        const token = jwt.sign({ username }, 'yourSecretKey', { expiresIn: '1h' });
        res.json({ token });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = AuthController;
