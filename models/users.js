const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  lastname: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  username: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
});

module.exports = mongoose.model("Users", userSchema);
