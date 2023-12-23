// Configuration for MongoDB connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
