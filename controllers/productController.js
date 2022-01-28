const { Op } = require("sequelize");
const { Product, Brand } = require("../models");

exports.getAllProducts = async (req, res, next) => {
  try {
    const product = await Product.findAll({
      attributes: ["id", "product_name", "product_img"],
      include: [
        {
          model: Brand,
          attributes: ["brand_name"],
        },
      ],
    });
    res.status(200).json({ product });
  } catch (err) {
    next(err);
  }
};
