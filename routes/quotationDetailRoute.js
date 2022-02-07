const express = require("express");
const quotationDetailController = require("../controllers/quotationDetailController");

const router = express.Router();

router.post("/", quotationDetailController.createQuotationDetail);

module.exports = router;
