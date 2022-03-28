const express = require("express");
const mustacheExpress = require("mustache-express");

const port = process.env.PORT || 3000;
const app = express();
app.set("views", `${__dirname}/views`);
app.set("view engine", "mustache");
app.engine("mustache", mustacheExpress());
app.get("/", (req, res) => {
  res.render("hello", { pageTitle: "Test" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
