import dotenv from "dotenv";
import express from "express";
import MainController from "./controllers/MainController.js";
import productRouter from "./routes/product.routes.js";
import { BASE_API } from "./utils/constants.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const { home } = new MainController();
// ROUTES
app.use(BASE_API, home);
app.use(BASE_API + "/products", productRouter);
export default app;
