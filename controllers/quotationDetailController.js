const { Op } = require("sequelize");
const { QuotationDetail, MetalPrice, Quotation } = require("../models");

exports.createQuotationDetail = async (req, res, next) => {
  console.log(req.body);

  try {
    const {
      quantity,
      totalOfferAmount,
      pdPrice,
      ptPrice,
      rhPrice,
      quotationId,
    } = req.body;
    const quotation = await Quotation.findOne({
      where: { id: quotationId },
    });
    console.log(quotation);

    const addQuotationDetail = await QuotationDetail.create({
      quantity,
      totalOfferAmount,
      pdPrice,
      ptPrice,
      rhPrice,
      quotationId: quotation.id,
    });
    res.status(201).json({ addQuotationDetail });
  } catch (err) {
    next(err);
  }
};
