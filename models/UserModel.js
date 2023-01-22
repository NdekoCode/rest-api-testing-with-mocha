import { model, Schema } from "mongoose";
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 150,
    },
    email: {
      type: String,
      required: true,
      min: 10,
      max: 255,
    },
    password: {
      min: 6,
      max: 255,
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const UserModel = new model("user", userSchema);
export default UserModel;
