// const metalPrice = require("../models/metalPrice");
const { MetalPrice, Product } = require("../models");
const { getMetalApi } = require("../services/getMetalApi");

// export metalPrice to Frontend
exports.getMetalPrice = async (req, res, next) => {
  try {
    const metalPrice = await MetalPrice.findOne({
      order: [
        // order by lasted of createdAt ,
        ["createdAt", "DESC"],
      ],
    });
    res.status(200).json(metalPrice);
  } catch (err) {
    next(err);
  }
};
