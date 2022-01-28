const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/", productController.getAllProducts);
// router.post("/products/:id", productController.getProduct)

module.exports = router;
