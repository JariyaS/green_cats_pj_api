const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

// get all products without price
router.get("/", productController.getAllProductsWithoutPrice);
router.get("/", productController.getAllProductsWithPrice);
// router.post("/products/:id", productController.getProduct)

module.exports = router;
