const products = require("../models/product");

const geAllProductsStatic = async (req, res) => {
  const product = await products.find({});
  res.status(200).json({ msg: "success", data: product });
};

const geAllProducts = async (req, res) => {
  const product = await products.find({});
  res.status(200).json({ msg: "success", data: product });
};

const getSearchAllProducts = async (req, res) => {
  const { name, featured,company } = req.query;
  const queryObject = {};
  if (name) {
    queryObject.name = name;
  }
  if (featured) {
    queryObject.featured = featured;
  }
  if (company) {
    queryObject.company = company;
  }
  const product = await products.find(queryObject);
  res.status(200).json({ msg: "success", data: product });
};

module.exports = { geAllProducts, geAllProductsStatic, getSearchAllProducts };
