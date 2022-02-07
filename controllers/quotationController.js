const { Op } = require("sequelize");
const { Quotation } = require("../models");

exports.createQuotation = async (req, res, next) => {
  console.log(req.body);

  try {
    const { totalOfferAmount, status, userId } = req.body;
    const quotationNo = Number(new Date());
    console.log(quotationNo);
    const addQuotation = await Quotation.create({
      totalOfferAmount,
      status,
      userId,
      quotationNo,
    });
    res.status(201).json({ addQuotation });
  } catch (err) {
    next(err);
  }
};

exports.getAllQuotation = async (req, res, next) => {
  try {
    const quotation = await Quotation.findAll({});
    res.status(200).json({ quotation });
  } catch (err) {
    next(err);
  }
};
