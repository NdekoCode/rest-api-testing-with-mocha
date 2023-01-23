import dotenv from "dotenv";
import express from "express";
import swaggerUI from "swagger-ui-express";
import yamljs from "yamljs";
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
const swaggerDefinition = yamljs.load("./swagger.yaml");
app.use(
  BASE_API + "/docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDefinition)
);
const { home } = new MainController();
// ROUTES
// POST, GET, DELETE --> CRUD
app.use(BASE_API + "/products", productRouter);
// api/v1/user
app.use(BASE_API + "/user", authRouter);
app.use(BASE_API, home);

export default app;
