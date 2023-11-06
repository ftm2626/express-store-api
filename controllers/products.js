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
  const {
    name,
    featured,
    company,
    sort,
    limit = 10,
    page = 1,
    field,
    numericFilters,
  } = req.query;
  const queryObject = {};
  if (name) {
    // queryObject.name = name; // it's exact
    queryObject.name = { $regex: name, $options: "i" }; // it's not exact, you can search single charaters
  }
  if (featured) {
    queryObject.featured = featured;
  }
  if (company) {
    queryObject.company = company;
  }

  if (numericFilters) {
    const opratorMap = {
      ">": "$gt",
      ">=": "$gte",
      "<": "$lt",
      "<=": "$lte",
      "=": "$eq",
    };
    const reqEx = /\b(<|>|<=|>=|=)\b/g;
    let filters = numericFilters.replace(
      reqEx,
      (match) => `-${opratorMap[match]}-`
    );
    const options = ["rating", "price"]; //only can apply to these fields

    filters = filters.split(",").forEach((items) => {
      const [field, oprator, value] = items.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [oprator]: +value };
      }
    });
  }

  let result = products.find(queryObject);

  if (sort) {
    result = result.sort(sort); // sort the api result
  } else {
    result = result.sort("createdAt");
  }
  if (field) {
    result = result.select(field); //return only name and price in result
  }
  const skip = (+page - 1) * limit;
  result = result.limit(+limit);
  result = result.skip(+skip);
  const product = await result;
  res.status(200).json({ msg: "success", data: product });
};

module.exports = { geAllProducts, geAllProductsStatic, getSearchAllProducts };
