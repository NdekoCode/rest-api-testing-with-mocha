import app from "./app.js";

const PORT = process.env.PORT || 4000;
app.set("port", PORT);
app.listen(PORT, () => {
  console.log("Server is listening at " + PORT);
});
