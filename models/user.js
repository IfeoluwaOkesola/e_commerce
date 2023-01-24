const { Schema, model } = require('mongoose');
const validator = require('validator');

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, 'please enter a valid email'],
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },
});

const User = model('User', userSchema);

module.exports = { User };
