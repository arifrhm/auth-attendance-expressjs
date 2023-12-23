// MongoDB model for User
const mongoose = require('../config/dbConfig');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const UserDBModel = mongoose.model('User', userSchema);

module.exports = UserDBModel;
