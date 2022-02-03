// const metalPrice = require("../models/metalPrice");
const { MetalPrice, Product } = require("../models");
const { getMetalApi } = require("../services/getMetalApi");

// exports.createMetalPrice = async (req, res, next) => {
//   try {
//     const {
//       date,
//       rates: { XPD, XPT, XRH },
//     } = await getMetalApi();
//     console.log("XPD =", XPD, " XPT =", XPT, " XRH =", XRH);

//     const addMetalPrice = await MetalPrice.create({
//       XPD,
//       XPT,
//       XRH,
//     });

//     res.status(201).json({ addMetalPrice });
//   } catch (err) {
//     next(err);
//   }
// };

exports.getMetalPrice = async (req, res, next) => {
  try {
    const metalPrice = await MetalPrice.findOne({
      order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ["createdAt", "DESC"],
      ],
    });
    res.status(200).json(metalPrice);
  } catch (err) {
    next(err);
  }
};

// const addProducts = await Product.create(
//     ({
//       productName,
//       productImg,
//       ptToz,
//       pdToz,
//       rhToz,
//       product_price,
//       brandId,
//     } = req.body)
//   );
