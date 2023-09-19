const express = require("express");
const app = express();
const port = 3000;
// Connect to MongoDB
const dbConnect = require("../connectDB");

app.get("/", (req, res) => {
  res.json({ name: "hanin" });
});
app.get("/", (req, res) => {
  res.json({ name: "asd" });
  console.log("Hello Hanin");
});

app.listen(port, () => {
  console.log("Server is running on port ${port}");
});
