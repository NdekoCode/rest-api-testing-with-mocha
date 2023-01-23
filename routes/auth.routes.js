import { Router } from "express";
import UsersController from "../controllers/UsersController.js";
const authRouter = Router();
const usersCTRL = new UsersController();

// Registration --- api/v1/user/register
authRouter.post("/register", usersCTRL.register);

// Login  --- api/v1/user/login
authRouter.post("/login", usersCTRL.login);

export default authRouter;
