const { Op } = require("sequelize");
const { Product, Brand, MetalPrice } = require("../models");

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
          attributes: ["brand_name"],
        },
      ],
    });
    // console.log(JSON.stringify(product, null, 4));

    // console.log(product[0].pdToz);

    const metalPrice = await MetalPrice.findOne({
      order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ["createdAt", "DESC"], // get lasted MetalPrice , order by createdAt DESC
      ],
    });

    const { XPT, XPD, XRH } = metalPrice;

    // use forEach to push id, productName,brand,ptToz/pdToz,rhToz(value) in Array of object

    let productPrice = new Array(product.length).fill(null).map(() => ({}));
    product.forEach((x, i) => {
      productPrice[i].id = x.id;
      productPrice[i].productName = x.productName;
      productPrice[i].productImg = x.productImg;
      productPrice[i].brand = x.Brand.dataValues.brand_name;
      productPrice[i].ptToz = x.ptToz;
      productPrice[i].pdToz = x.pdToz;
      productPrice[i].rhToz = x.rhToz;

      // console.log(x.pdToz);
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

// create product's items in DB through req.body
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
