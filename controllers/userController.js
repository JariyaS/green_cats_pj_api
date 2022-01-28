const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const { User } = require("../models");

exports.getUser = (req, res, next) => {
  const { id, firstName, lastName, email, phoneNumber } = req.user;
  res
    .status(200)
    .json({ user: { id, firstName, lastName, email, phoneNumber } });
};

exports.test = (req, res, next) => {
  console.log("test controller");
  // console.log(req.user);
  res.status(200).json(req.user);
};
