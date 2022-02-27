const { Op } = require("sequelize");
const {
  Quotation,
  QuotationDetail,
  Product,
  Brand,
  User,
} = require("../models");
const quotationDetails = require("../models/quotationDetails");
const { getMetalPrice } = require("../services/getMetalApi");

exports.getUserQuotationById = async (req, res, next) => {
  const { id } = req.params;
  try {
    // const quotationDetail = await Quotation.findOne({
    const quotationDetail = await Quotation.findAll({
      include: [
        {
          model: User,
        },
        {
          model: QuotationDetail,
          include: [
            {
              model: Product,
              include: [
                {
                  model: Brand,
                },
              ],
            },
          ],
        },
      ],
      where: { userId: id },
    });
    res.status(201).json({ quotationDetail });
  } catch (err) {
    next(err);
  }
};
