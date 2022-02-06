const { Op } = require("sequelize");
const { Quotation } = require("../models");

exports.createQuotation = async (req, res, next) => {
  console.log(req.body);

  try {
    const addQuotation = await Quotation.create(
      ({ totalOfferAmount, quotationNo, status, userId } = req.body)
    );
    res.status(201).json({ addQuotation });
  } catch (err) {
    next(err);
  }
};

// exports.getAllQuotation = async (req, res, next) => {
//   try {
//     const product = await Quotation.findAll({
//       attributes: ["id", "product_name", "product_img"],
//       include: [
//         {
//           model: Brand,
//           attributes: ["brand_name"],
//         },
//       ],
//     });
//     res.status(200).json({ product });
//   } catch (err) {
//     next(err);
//   }
// };
