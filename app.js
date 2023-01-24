import dotenv from "dotenv";
import express from "express";
import swaggerUI from "swagger-ui-express";
import yamljs from "yamljs";
import dbConnect from "./config/dbConfig.js";
import MainController from "./controllers/MainController.js";
import authRouter from "./routes/auth.routes.js";
import productRouter from "./routes/product.routes.js";
import { BASE_API } from "./utils/constants.js";
dotenv.config();

dbConnect();
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const { home } = new MainController();

// On configure la documentation de l'API
const swaggerDefinition = yamljs.load("./swagger.yaml");

app.use(
  BASE_API + "/docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDefinition)
);

// ROUTES
// POST, GET, DELETE --> CRUD
app.use(BASE_API + "/products", productRouter);

// api/v1/user
app.use(BASE_API + "/user", authRouter);
app.use(BASE_API, home);

export default app;
