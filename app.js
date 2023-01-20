import dotenv from "dotenv";
import express from "express";
import MainController from "./controllers/MainController.js";
import authRouter from "./routes/auth.routes.js";
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
// POST, GET, DELETE --> CRUD
app.use(BASE_API + "/products", productRouter);
app.use(BASE_API + "/auth", authRouter);
app.use(BASE_API, home);

export default app;
