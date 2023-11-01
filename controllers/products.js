const products = require("../models/product");

const geAllProductsStatic = async (req, res) => {
  const product = await products.find({});
  res.status(200).json({ msg: "success", data: product });
};

const geAllProducts = async (req, res) => {
  res.status(200).json({ msg: "product testing route" });
};

module.exports = { geAllProducts, geAllProductsStatic };
