require("dotenv").config();

// require("/config/passport");
const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const metalPriceRoute = require("./routes/metalPriceRoute");
const quotationRoute = require("./routes/quotationRoute");
const quotationDetailRoute = require("./routes/quotationDetailRoute");
const getMetalApi = require("./services/getMetalApi");
const createMetalPrice = require("./controllers/metalPriceController");

const { sequelize } = require("./models/index");
// sequelize.sync({ force: true });

const app = express();
app.use(cors());
app.use(express.json());

//Register,Login
app.use("/users", userRoute);

//Catalogue, get all product without price
app.use("/products", productRoute);

// Request metal price from API
// getMetalApi.getMetalApi();
app.use("/metalprices", metalPriceRoute);

app.use("/quotations", quotationRoute);

app.use("/quotationdetails", quotationDetailRoute);

app.use((req, res, next) => {
  res.status(404).json({ message: "resource not found on this server" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running on port ${port}`));
