const express = require("express");
const app = express();

app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile("public/index.html", { root: __dirname });
});

app.get("/public/style.css", function (req, res) {
  res.sendFile("public/style.css", { root: __dirname });
});

app.listen(3000);
