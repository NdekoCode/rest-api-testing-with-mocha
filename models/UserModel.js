import { model, Schema } from "mongoose";
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
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
