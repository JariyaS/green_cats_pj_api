const express = require("express");
const productController = require("../controllers/productController");
const upload = require("../middlewares/upload");

const router = express.Router();

router.get("/", productController.getAllProductsWithoutPrice);
router.get("/withprice", productController.getAllProductsWithPrice);
router.post("/", upload.single("img"), productController.createProduct);
router.patch("/:id", upload.single("img"), productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

// router.post("/products/:id", productController.getProduct)

module.exports = router;
