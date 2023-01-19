import { connect, set } from "mongoose";
export default function dbConnect(app) {
  const DB_URL = process.env.DB_URL;
  set("strictQuery", true);
  connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Connected to MongoDB...");
      const PORT = process.env.PORT || 3500;
      app.set("port", PORT);
      app.listen(PORT, () => {
        console.log("Server is listening at " + PORT);
      });
    })
    .catch((err) => {
      console.error("Could not connect to MongoDB...", err.message);
    });
}
