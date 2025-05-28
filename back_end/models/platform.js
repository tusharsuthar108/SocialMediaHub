const mongoose = require('mongoose');

const platformSchema = new mongoose.Schema({
  name: String,
  email: String
});

module.exports = mongoose.model('Platform', platformSchema);