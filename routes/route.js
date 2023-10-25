const routes = require("express").Router();
const { create_Categories } = require("../controller/controller");
routes.route("/api/categories").get(create_Categories);


module.exports = routes;
