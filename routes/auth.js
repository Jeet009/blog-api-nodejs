const express = require("express");
const User = require("../models/users");
const router = express.Router();

const { registerValidation } = require("../validation");

// Registering Users
router.post("/register", async (req, res) => {
  // Checking The Validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checking Email Existence
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  // Checking Username Existence
  const usernameInUse = await User.findOne({ username: req.body.username });
  if (usernameInUse) return res.status(400).send("Username is already taken");

  // Creating User
  let user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });
  try {
    user = await user.save();
    res.send("User Registered Successfully" + user.id);
  } catch (e) {
    console.log("Couldn't Register", e);
  }
});

// Login Users

module.exports = router;
