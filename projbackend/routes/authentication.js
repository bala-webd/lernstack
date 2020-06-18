const express = require("express");
const { check, validationResult } = require("express-validator");

const router = express.Router();
const { signout, signup, signin } = require("../controllers/authentication");

router.get("/signout", signout);

router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("Name should be atleast 3 characters"),
    check("email").isEmail(),
    check("password")
      .isLength({ min: 3 })
      .withMessage("Password should be atleast 3 characters"),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email").isEmail().withMessage("Email is required"),
    check("password")
      .isLength({ min: 3 })
      .withMessage("Password should be atleast 3 characters"),
  ]
  signin
);

module.exports = router;
