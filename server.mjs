import express from "express";
import mustacheExpress from "mustache-express";
// const express = require("express");
// const mustacheExpress = require("mustache-express");

const port = process.env.PORT || 3000;
const app = express();
app.set("views", `./views`);
app.set("view engine", "mustache");
app.engine("mustache", mustacheExpress());
app.get("/", (req, res) => {
  console.log(req.query);
  console.log("wurst");
  res.render("hello", { pageTitle: "Test", items: ["a", "b", "c"] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
