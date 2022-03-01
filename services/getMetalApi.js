const axios = require("axios");
const { MetalPrice } = require("../models");

const metalApi = "https://www.metals-api.com/api/latest";
const accessKey = process.env.METAL_API_KEY;

exports.getMetalApi = async () => {
  try {
    const res = await axios.get(metalApi, {
      params: {
        access_key: accessKey,
        base: "USD",
        symbols: "XPD,XPT,XRH",
      },
    });
    console.log(res.data);
    const {
      rates: { XPD, XPT, XRH },
    } = res.data;

    // create in DB : MetalPrice table

    await MetalPrice.create({
      XPD,
      XPT,
      XRH,
    });
  } catch (err) {
    // console.log(err);
  }
};

// check current metal's price in local DB
exports.getMetalPrice = async () => {
  try {
    const metalPrice = await MetalPrice.findOne({
      order: [["createdAt", "DESC"]],
    });
    return metalPrice;
  } catch (err) {
    console.log(err);
  }
};
