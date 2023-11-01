require("dotenv").config();
require("express-async-errors")
const express = require("express");
const { notFound } = require("./middleware/not-found");
const { errorHandlerMiddleware } = require("./middleware/error-handler");
const { connectDB } = require("./db/connect");
const ProductRouter = require("./routes/products");


const app = express();
app.use(express.json());

app.use("/api/v1/products", ProductRouter);
// app.use("/api/v1/products");

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(5000, () => {
      console.log("server running...");
    });
  } catch (error) {}
};

start();
