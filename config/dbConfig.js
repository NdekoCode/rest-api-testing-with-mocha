import mongoose, { set } from "mongoose";
export default function dbConnect() {
  const DB_URL = process.env.DB_URL_TEST;
  set("strictQuery", true);
  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB...");
    })
    .catch((err) => {
      console.error("Could not connect to MongoDB...", err.message);
    });

  mongoose.Promise = global.Promise;
  mongoose.connection.on("error", (err) => {
    console.log("Error on database", err.message);
  });
}
