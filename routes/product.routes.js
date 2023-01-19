import { Router } from "express";
const productRouter = Router();

productRouter.get("/", (req, res) => {});
productRouter.post("/", (req, res) => {});
productRouter.get("/:id", (req, res) => {});
productRouter.put("/:id", (req, res) => {});
productRouter.delete("/:id", (req, res) => {});

export default productRouter;
