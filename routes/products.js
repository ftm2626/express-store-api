const express = require("express");
const {
  geAllProductsStatic,
  geAllProducts,
  getSearchAllProducts,
} = require("../controllers/products");
const router = express.Router();

router.route("/").get(geAllProducts);
router.route("/static").get(geAllProductsStatic);
router.route("/search").get(getSearchAllProducts);

module.exports = router;
