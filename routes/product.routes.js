import { Router } from "express";
import ProductController from "../controllers/ProductController.js";
const productRouter = Router();

const productCTRL = new ProductController();
productCTRL.getProducts = productCTRL.getProducts.bind(productCTRL);
productCTRL.getProductsInStock =
  productCTRL.getProductsInStock.bind(productCTRL);
// -- CRUD Operations

// /api/v1/products
// Create product - POST
productRouter.post("/", productCTRL.postProduct);

// /api/v1/products
// Read all products -- GET
productRouter.get("/", productCTRL.getProducts);

// /api/v1/products/inStock
// Read all products inStock -- GET
productRouter.get("/inStock", productCTRL.getProductsInStock);

// /api/v1/products/:id
// Read specific product -- GET
productRouter.get("/:id", productCTRL.getSingleProduct);

// /api/v1/products/:id
// UPDATE specific product -- PUT
productRouter.put("/:id", productCTRL.updateProduct);

// /api/v1/products/:id
// DELETE specific product -- PUT
productRouter.delete("/:id", productCTRL.deleteProduct);

export default productRouter;
