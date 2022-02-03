const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

// get all products without price
router.get("/", productController.getAllProductsWithoutPrice);
router.get("/withprice", productController.getAllProductsWithPrice);
router.post("/", productController.createProduct);

// router.post("/products/:id", productController.getProduct)

module.exports = router;
