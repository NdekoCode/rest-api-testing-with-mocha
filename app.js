import dotenv from "dotenv";
import express from "express";
import MainController from "./controllers/MainController.js";
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
app.use(BASE_API, home);
// ROUTES

export default app;
