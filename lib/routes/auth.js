const express = require("express");
const router = express.Router();

// Import validators
const {
  userRegisterValidator,
  passwordResetValidator,
} = require("../validators/auth");

const { runValidation } = require("../validators");

// Import controllers
const {
  register,
  login,
  logout
} = require("../controllers/auth");

router.post("/register", userRegisterValidator, runValidation, register);
router.post("/login", login);
router.get("/logout", logout);


module.exports = router;
