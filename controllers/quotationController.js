const { Op } = require("sequelize");
const { Quotation, QuotationDetail, Product } = require("../models");
const { getMetalPrice } = require("../services/getMetalApi");

exports.createQuotation = async (req, res, next) => {
  // console.log(req.body);

  try {
    const { totalOfferAmount, status, userId } = req.body;
    const quotationNo = Number(new Date()); // create quotation no.
    // console.log(quotationNo);
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
    const quotation = await Quotation.findAll();
    res.status(200).json({ quotation });
  } catch (err) {
    next(err);
  }
};

exports.addQuotationDetail = async (req, res, next) => {
  const { quantity, productId } = req.body;
  const { id } = req.params; // quotationId
  try {
    const product = await Product.findOne({
      where: { id: productId },
    });
    console.log(product);
    let price = await getMetalPrice();
    console.log(price);
    const addQuotationDetailResult = await QuotationDetail.create({
      quantity,
      productPrice: (
        (price.XPT * product.ptToz +
          price.XPD * product.pdToz +
          price.XRH * product.rhToz) *
        10e4
      ).toFixed(2),
      ptPrice: price.XPT * product.ptToz,
      pdPrice: price.XPD * product.pdToz,
      rhPrice: price.XRH * product.rhToz,
      productId: product.id,
      quotationId: id,
    });
    res.status(201).json({ addQuotationDetailResult });
  } catch (err) {
    next(err);
  }
};
