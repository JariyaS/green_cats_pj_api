// const metalPrice = require("../models/metalPrice");
const { MetalPrice, Product } = require("../models");
const { getMetalApi } = require("../services/getMetalApi");

// get metal price through outside API by frontend
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

// export metalPrice to Frontend
exports.getMetalPrice = async (req, res, next) => {
  try {
    const metalPrice = await MetalPrice.findOne({
      order: [
        // order by lasted of createdAt , limit 1
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
