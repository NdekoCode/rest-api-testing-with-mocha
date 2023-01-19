import { Router } from "express";
import ProductController from "../controllers/ProductController.js";
const productRouter = Router();

const productCTRL = new ProductController();
productRouter.get("/", productCTRL.getProducts);
productRouter.post("/", productCTRL.postProduct);
productRouter.get("/:id", productCTRL.getSingleProduct);
productRouter.put("/:id", productCTRL.updateProduct);
productRouter.delete("/:id", productCTRL.deleteProduct);

export default productRouter;
