const routes = require("express").Router();
routes.route("/api/categories").get((req, res) => {
  res.json("cool");
});

module.exports = routes;
