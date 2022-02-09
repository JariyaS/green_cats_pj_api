const axios = require("axios");
const { MetalPrice } = require("../models");

const metalApi = "https://www.metals-api.com/api/latest";
const accessKey =
  "hcf4dxqpwh5non4or3sd3z02y3arasjkje7wn5mfbu6d8avdg5o00v613cpb";

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
      order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ["createdAt", "DESC"],
      ],
    });
    return metalPrice;
  } catch (err) {
    console.log(err);
  }
};
