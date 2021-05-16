const { check } = require("express-validator");

// Array of fields to be checked
exports.userRegisterValidator = [
  check("name")
    // Make sure it is not empty
    .isLength({ min: 3 })
    .withMessage("Name of minimum 3 characters is required"),
  check("email")
    // Make sure it is not invalid
    .isEmail()
    .withMessage("Email is not valid")
    // Make sure it is not short or long
    .isLength({
      min: 4,
      max: 2000,
    })
    .withMessage("Email of minimum 4 and maximum 2000 characters is required"),
  // Make sure it is not short
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .matches(/\d/)
    .withMessage("Password must contain at least one number"),
];

exports.passwordResetValidator = [
  check("newPassword")
    // Make sure it is not empty
    .not()
    .isEmpty()
    .withMessage("Password is required"),
  check("newPassword")
    .isLength({ min: 3 })
    .withMessage("Name of minimum 3 characters is required")
    .matches(/\d/)
    .withMessage("Password must contain at least one number"),
];
