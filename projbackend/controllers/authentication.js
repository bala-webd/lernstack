const User = require("../models/user");
const { check, validationResult } = require("express-validator");

exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
      params: errors.array()[0].param,
    });
  }
  const user = new User(req.body);
  user.save((err, userD) => {
    if (err) {
      return res.status(400).json({
        err: "Unable to save user in DB",
      });
    }
    res.json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  });
};

exports.signout = (req, res) => {
  //res.send("User Signout");
  res.json({
    message: "User Signout",
  });
};

exports.signin = (req, res) => {
  //
};
