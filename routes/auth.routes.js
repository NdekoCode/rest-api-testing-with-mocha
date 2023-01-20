import { Router } from "express";
import UsersController from "../controllers/UsersController.js";
import UserModel from "../models/UserModel.js";
console.log(UserModel);
const authRouter = Router();
const usersCTRL = new UsersController();

// Registration
authRouter.post("/register", usersCTRL.register);

// Login
authRouter.post("/login", usersCTRL.login);

export default authRouter;
