const { Op, UUIDV4 } = require("sequelize");
const { Quotation } = require("../models");

exports.createQuotation = async (req, res, next) => {
  console.log(req.body);

  try {
    const addQuotation = await Quotation.create(
      ({ quotationNo, status, userId } = req.body)
    );
    res.status(201).json({ addQuotation });
  } catch (err) {
    next(err);
  }
};
// exports.createProduct = async (req, res, next) => {
//   console.log(req.body);
//   try {
//     const addProducts = await Product.create(
//       ({ productName, productImg, ptToz, pdToz, rhToz, brandId } = req.body)
//     );

//     res.status(201).json({ addProducts });
//   } catch (err) {
//     next(err);
//   }
// };
