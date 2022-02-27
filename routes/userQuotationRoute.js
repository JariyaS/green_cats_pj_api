const express = require("express");
const userQuotationController = require("../controllers/userQuotationController");

const router = express.Router();

router.get("/:id", userQuotationController.getUserQuotationById);

module.exports = router;
