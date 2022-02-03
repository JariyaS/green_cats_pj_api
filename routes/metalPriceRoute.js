const express = require("express");

const metalPrice = require("../models/metalPrice");
const metalPriceController = require("../controllers/metalPriceController");

const router = express.Router();

// get metal price from outside API

// router.post("/", metalPriceController.createMetalPrice);
// router.get("/productprice", metalPriceController.calMetalPrice);
router.get("/", metalPriceController.getMetalPrice);
// router.post("/products/:id", productController.getProduct)

module.exports = router;
