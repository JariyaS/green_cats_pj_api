const express = require("express");

const metalPrice = require("../models/metalPrice");
const metalPriceController = require("../controllers/metalPriceController");

const router = express.Router();

// get metal price from outside API

router.get("/", metalPriceController.getMetalPrice);

module.exports = router;
