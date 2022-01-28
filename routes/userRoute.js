const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();
router.get("/test", authController.authenticate, userController.test);

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
