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

exports.createQuotation = async (req, res, next) => {
  // console.log(req.body);

  try {
    const { totalOfferAmount, status, userId } = req.body;
    const quotationNo = Number(new Date()); // create quotation no.
    // console.log(quotationNo);
    const addQuotation = await Quotation.create({
      totalOfferAmount,
      status,
      userId,
      quotationNo, // created by Number(new Date())
    });

    res.status(201).json({ addQuotation });
  } catch (err) {
    next(err);
  }
};

exports.getAllQuotation = async (req, res, next) => {
  try {
    const quotation = await Quotation.findAll();
    res.status(200).json({ quotation });
  } catch (err) {
    next(err);
  }
};

exports.getQuotationById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const quotationDetail = await Quotation.findOne({
      include: [
        {
          model: User,
          attributes: ["first_name", "last_name", "phone_number"],
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
      where: { id: id },
    });
    res.status(201).json(quotationDetail); // already in object form
  } catch (err) {
    next(err);
  }
};

exports.addQuotationDetail = async (req, res, next) => {
  // get quotationId, cartItems from Fronte
  const { quotationId, cartItems } = req.body;

  console.log(cartItems);

  try {
    // input new items by mapping data
    const productList = [];
    const newCart = cartItems.map(({ qty, id, price, ...item }) => {
      productList.push(id);
      return {
        ...item,
        quantity: qty,
        productId: id,
        productPrice: price,
        quotationId,
      };
    });

    // เปลี่ยนแปลงข้อมูลให้ได้ตามที่ต้องการด้วย method ต่างๆก่อน แล้วค่อย bulk create ชุดข้อมูล

    const addQuotationDetailResult = await QuotationDetail.bulkCreate(newCart);

    res.status(201).json({ addQuotationDetailResult });
  } catch (err) {
    next(err);
  }
};

exports.updateQuotationStatus = async (req, res, next) => {
  try {
    const { quotationId } = req.params;
    const quotation = await Quotation.findOne({
      where: {
        id: quotationId,
      },
    });

    if (!quotation) {
      return res.status(400).json({ message: "this quotation not found " });
    }
    quotation.status = quotation.status === "Waiting" ? "Delivered" : "Waiting";

    await quotation.save();
    // res.status(200).json({ message: "Quotation status changed" });
    res.status(200).json({ quotation });
  } catch (err) {
    next(err);
  }
};

exports.deleteQuotation = async (req, res, next) => {
  try {
    const { quotationId } = req.params;

    await QuotationDetail.destroy({ where: { quotationId } });
    await Quotation.destroy({ where: { id: quotationId } });

    res.status(204).json("completed");
  } catch (err) {
    next(err);
  }
};
