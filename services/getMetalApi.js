const axios = require("axios");
const { MetalPrice } = require("../models");

const metalApi = "https://www.metals-api.com/api/latest";
const accessKey =
  "7mqcr74eq6g2s32p4z32f0pjhzdrtga9f8osh03qgvq22rc0s9mckayn56gy";

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
