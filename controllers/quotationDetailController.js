const { Op } = require("sequelize");
const { QuotationDetail } = require("../models");
const metalPrice = require("../models/metalPrice");

exports.createQuotationDetail = async (req, res, next) => {
  console.log(req.body);

  try {
    const addQuotationDetail = await QuotationDetail.create(
      ({
        quantity,
        totalOfferAmount,
        ptPrice: metalPrice.XPD,
        ptPrice: metalPrice.XPT,
        rhPrice: metalPrice.XRH,
        quotationId,
      } = req.body)
    );
    res.status(201).json({ addQuotation });
  } catch (err) {
    next(err);
  }
};
