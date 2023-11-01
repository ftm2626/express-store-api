require("dotenv").config();
const { connectDB } = require("./db/connect");
const product = require("./models/product");
const json = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await product.deleteMany();
    await product.create(json);
    console.log("success");
    process.exit(0); //stop npm start
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
