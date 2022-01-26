const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

// ไม่เช็ครูปแบบของอีเมล เนื่องจากกำหนดค่า validate isEmail ใน model แล้ว
exports.register = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirmPassword,
    } = req.body;
    console.log(req.body);
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "password and confirm password did not match" });
    }
    const existUser = await User.findOne({
      where: { email: email },
    });
    if (existUser) {
      return res.status(400).json({ message: "this email is already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hashedPassword,
      userRole: "user",
    });
    res.status(202).json({ message: "user created" });
  } catch (err) {
    next(err);
  }
};

const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

exports.login = async (req, res, next) => {
  try {
    const { emailLogin, password } = req.body;

    const user = await User.findOne({ where: { email: emailLogin } });

    if (!user) {
      return res.status(400).json({ message: "invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "invalid email or password" });
    }

    //ส่วนของการสร้าง jsonwebtoken
    const payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: 60 * 60 * 24 * 30,
    });
    const { id, firstName, lastName, email, phoneNumber, userRole } = user;
    res.status(200).json({
      token,
      user: { id, firstName, lastName, email, phoneNumber, userRole },
    });
  } catch (err) {
    next(err);
  }
};
