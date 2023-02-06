import { model, Schema } from "mongoose";
const ProductSchema = new Schema(
  {
    title: {
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
  },
  { timestamps: true }
);
const ProductModel = new model("product", ProductSchema);
export default ProductModel;
