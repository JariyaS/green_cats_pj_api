const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const { User } = require("../models");

exports.getUser = (req, res, next) => {
  const { id, firstName, lastName, email, phoneNumber } = req.user;
  res
    .status(200)
    .json({ user: { id, firstName, lastName, email, phoneNumber } });
};
