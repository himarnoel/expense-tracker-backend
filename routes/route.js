const routes = require("express").Router();
const {
  create_Categories,
  get_Categories,
} = require("../controller/controller");
routes.route("/api/categories").post(create_Categories).get(get_Categories);

module.exports = routes;
