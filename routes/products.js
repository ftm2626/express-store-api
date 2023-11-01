const express = require("express");
const {
  geAllProductsStatic,
  geAllProducts,
} = require("../controllers/products");
const router = express.Router();

router.route("/").get(geAllProducts);
router.route("/static").get(geAllProductsStatic);

module.exports = router;
