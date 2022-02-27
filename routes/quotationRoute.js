const express = require("express");
const quotationController = require("../controllers/quotationController");

const router = express.Router();

router.post("/create", quotationController.addQuotationDetail);
router.post("/", quotationController.createQuotation);
router.get("/:id", quotationController.getQuotationById);

router.get("/", quotationController.getAllQuotation);
router.patch("/:quotationId", quotationController.updateQuotationStatus);
router.delete("/:quotationId", quotationController.deleteQuotation);

module.exports = router;
