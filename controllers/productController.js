const { Op } = require("sequelize");
const { Product, Brand, MetalPrice } = require("../models");

//get all product without price : Guest
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

//get all products with price (for) User )
exports.getAllProductsWithPrice = async (req, res, next) => {
  try {
    const product = await Product.findAll({
      // attributes: ["id", "product_name"],
      include: [
        {
          model: Brand,
          attributes: ["brand_name"],
        },
      ],
    });
    // console.log(JSON.stringify(product, null, 4));
    // console.log(product[0].id);

    const metalPrice = await MetalPrice.findOne({
      order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ["createdAt", "DESC"],
      ],
    });

    const { XPT, XPD, XRH } = metalPrice;
    // const mapped = product.map((item) => {
    //   let price = item.ptToz * XPT + item.pdToz * XPD + item.rhToz * XRH;
    //   return { ...item, price };
    // });
    // console.log(JSON.stringify(product, null, 2));
    // let pp = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    // let pp = [{}];
    let productPrice = new Array(product.length).fill(null).map(() => ({}));
    product.forEach((x, i) => {
      productPrice[i].id = x.id;
      productPrice[i].productName = x.productName;
      productPrice[i].productImg = x.productImg;
      productPrice[i].brand = x.Brand.dataValues.brand_name;
      productPrice[i].ptToz = x.ptToz;

      // console.log(x.id);
      // console.log(i);
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

exports.createProduct = async (req, res, next) => {
  console.log(req.body);
  try {
    const addProducts = await Product.create(
      ({ productName, productImg, ptToz, pdToz, rhToz, brandId } = req.body)
    );

    res.status(201).json({ addProducts });
  } catch (err) {
    next(err);
  }
};
