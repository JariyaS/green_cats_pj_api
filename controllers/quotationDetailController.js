// const { Op } = require("sequelize");
// const { QuotationDetail, MetalPrice, Quotation } = require("../models");

// exports.createQuotationDetail = async (req, res, next) => {
//   console.log(req.body);

//   try {
//     const {
//       quantity,
//       totalOfferAmount,
//       // pdPrice,
//       // ptPrice,
//       // rhPrice,
//       quotationId,
//     } = req.body;
//     const quotation = await Quotation.findAll({
//       // where: { id: quotationId },
//     });

//     console.log(quotation);

//     const addQuotationDetail = await QuotationDetail.create({
//       quantity,
//       totalOfferAmount,
//       pdPrice,
//       ptPrice,
//       rhPrice,
//       quotationId: quotation.id,
//     });
//     res.status(201).json({ addQuotationDetail });
//   } catch (err) {
//     next(err);
//   }
// };

// // const product = await QuotationDetail.findAll({
// //   // attributes: ["id", "product_name"],

// // });
// // // console.log(JSON.stringify(product, null, 4));
// // // console.log(product[0].id);

// // const metalPrice = await MetalPrice.findOne({
// //   order: [
// //     // Will escape title and validate DESC against a list of valid direction parameters
// //     ["createdAt", "DESC"],
// //   ],
// // });
