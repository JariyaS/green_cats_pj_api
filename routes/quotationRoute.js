const express = require("express");
const quotationController = require("../controllers/quotationController");

const router = express.Router();

router.post("/", quotationController.createQuotation);

// router.post("/products/:id", productController.getProduct)

module.exports = router;
