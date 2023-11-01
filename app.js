require("dotenv").config();
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
    await connectDB(
      "mongodb+srv://fatemeh:1234@express-task.xwkvxqf.mongodb.net/STORE-API?retryWrites=true&w=majority"
    ).catch((e) => console.log(e));
    app.listen(5000, () => {
      console.log("server running...");
    });
  } catch (error) {}
};

start();
