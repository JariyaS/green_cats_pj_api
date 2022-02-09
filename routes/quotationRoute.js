const express = require("express");
const quotationController = require("../controllers/quotationController");

const router = express.Router();

router.post("/:id", quotationController.addQuotationDetail);
router.post("/", quotationController.createQuotation);
// router.get("/", quotationController.getAllQuotation);

// router.post("/products/:id", productController.getProduct)

module.exports = router;
