const geAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "product testing route" });
};

const geAllProducts = async (req, res) => {
  res.status(200).json({ msg: "product testing route" });
};

module.exports = { geAllProducts, geAllProductsStatic };
