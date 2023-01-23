import { Router } from "express";
import ProductsController from "../controllers/ProductsController.js";
const productRouter = Router();

const productsCTRL = new ProductsController();
productsCTRL.getProducts = productsCTRL.getProducts.bind(productsCTRL);
productsCTRL.getProductsInStock =
  productsCTRL.getProductsInStock.bind(productsCTRL);
// -- CRUD Operations

// /api/v1/products
// Create product - POST
productRouter.post("/", productsCTRL.postProduct);

// /api/v1/products
// Read all products -- GET
productRouter.get("/", productsCTRL.getProducts);

// /api/v1/products/inStock
// Read all products inStock -- GET
productRouter.get("/inStock", productsCTRL.getProductsInStock);

// /api/v1/products/:id
// Read specific product -- GET
productRouter.get("/:id", productsCTRL.getSingleProduct);

// /api/v1/products/:id
// UPDATE specific product -- PUT
productRouter.put("/:id", productsCTRL.updateProduct);

// /api/v1/products/:id
// DELETE specific product -- PUT
productRouter.delete("/:id", productsCTRL.deleteProduct);

export default productRouter;
