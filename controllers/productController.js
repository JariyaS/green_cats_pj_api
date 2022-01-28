const { Op } = require("sequelize");
const { Product, Brand } = require("../models");

//get all product without price : Guest
exports.getAllProductsWithoutPrice = async (req, res, next) => {
  try {
    const product = await Product.findAll({
      attributes: ["id", "product_name", "product_img", "product_price"],
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

//get all products with price : User
exports.getAllProductsWithPrice = async (req, res, next) => {
  try {
    const product = await Product.findAll({
      attributes: ["id", "product_name", "product_price"],
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
