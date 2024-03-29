const { Op } = require("sequelize");
const fs = require("fs");
const util = require("util");
const cloudinary = require("cloudinary").v2;
const { Product, Brand, MetalPrice, QuotationDetail } = require("../models");

const uploadPromise = util.promisify(cloudinary.uploader.upload);

//get all products without price : Guest
exports.getAllProductsWithoutPrice = async (req, res, next) => {
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

//get all products with price
exports.getAllProductsWithPrice = async (req, res, next) => {
  try {
    const product = await Product.findAll({
      include: [
        {
          model: Brand,
          attributes: ["id", "brand_name"],
        },
      ],
    });

    // get lasted MetalPrice , order by createdAt DESC
    const metalPrice = await MetalPrice.findOne({
      order: [["createdAt", "DESC"]],
    });

    const { XPT, XPD, XRH } = metalPrice;

    // use forEach to push id, productName,brand,ptToz/pdToz,rhToz(value) in Array of object

    let productPrice = new Array(product.length).fill(null).map(() => ({}));
    product.forEach((x, i) => {
      productPrice[i].id = x.id;
      productPrice[i].productName = x.productName;
      productPrice[i].productImg = x.productImg;
      productPrice[i].brand = x.Brand.dataValues.brand_name;
      productPrice[i].brandId = x.Brand.dataValues.id;
      productPrice[i].ptToz = x.ptToz;
      productPrice[i].pdToz = x.pdToz;
      productPrice[i].rhToz = x.rhToz;

      productPrice[i].price = (
        (x.ptToz * XPT + x.pdToz * XPD + x.rhToz * XRH) *
        10e4
      ).toFixed(2);
    });

    res.status(200).json({ product: productPrice });
  } catch (err) {
    next(err);
  }
};

// create product's items in DB through req.body
exports.createProduct = async (req, res, next) => {
  // console.log(req.body);
  try {
    // destructuring parameter from frontend
    const { brand, model, pt, pd, rh } = req.body;

    console.log(req.file);
    let result = {};
    if (req.file) {
      result = await uploadPromise(req.file.path);
      fs.unlinkSync(req.file.path);
    }

    const addProducts = await Product.create({
      brandId: brand,
      productName: model,
      ptToz: pt,
      pdToz: pd,
      rhToz: rh,
      productImg: result.secure_url,
    });

    res.status(201).json({ addProducts });
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  // console.log(req.body);
  const { id } = req.params;
  const { brand, model, pt, pd, rh } = req.body;
  try {
    const product = await Product.findOne({
      where: { id },
    });

    console.log(product);
    if (!product) return res.status(400).json({ message: "product not found" });
    let result = {};

    if (req.file) {
      result = await uploadPromise(req.file.path);
      fs.unlinkSync(req.file.path);
    }
    const editProduct = await product.update({
      brandId: brand,
      productName: model,
      ptToz: pt,
      pdToz: pd,
      rhToz: rh,
      productImg: result.secure_url,
    });

    return res.status(201).json({ editProduct });
  } catch (err) {
    next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { id },
    });

    if (!product) {
      return res.status(400).json({ message: "this product not found" });
    }

    const productInQuo = await QuotationDetail.findOne({
      where: { productId: id },
    });
    if (productInQuo) {
      return res
        .status(400)
        .json({ message: "this product cann't be deleted" });
    }
    await product.destroy();
    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
