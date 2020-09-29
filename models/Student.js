const mongoose = require('mongoose');

const studentModel = new mongoose.Schema({
  nis: {
    type: Number,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  class: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Students', studentModel);