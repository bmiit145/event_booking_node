const express = require('express');
const router = express.Router();

const AuthController = require("../controller/authController");

router.post("/signin" , AuthController.login);

module.exports = router;