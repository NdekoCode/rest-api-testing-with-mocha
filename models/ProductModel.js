import { model, Schema } from "mongoose";
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  // name,description,price,inStock
});
const ProductModel = new model("product", ProductSchema);
export default ProductModel;
