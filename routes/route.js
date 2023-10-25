const routes = require("express").Router();
const {
  create_Categories,
  get_Categories,
  create_Transaction,
} = require("../controller/controller");
routes.route("/api/categories").post(create_Categories).get(get_Categories);
routes.route("/api/transaction").post(create_Transaction);

module.exports = routes;
