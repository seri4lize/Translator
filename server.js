const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const sendFile = (filePath) => (req, res) =>
  res.sendFile(path.join(__dirname, filePath));

app.get("/", sendFile("app.html"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
