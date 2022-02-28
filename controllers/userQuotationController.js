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
          attributes: ["id", "first_name", "last_name"],
        },
        {
          model: QuotationDetail,
          attributes: ["quantity", "product_price"],
          include: [
            {
              model: Product,
              attributes: ["product_name"],
              include: [
                {
                  model: Brand,
                  attributes: ["brand_name"],
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
