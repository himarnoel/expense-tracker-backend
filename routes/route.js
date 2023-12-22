const routes = require("express").Router();
const {
  create_Categories,
  get_Categories,
  create_Transaction,
  get_Transactions,
  delete_Transaction,
  get_Labels,
} = require("../controller/controller");
routes.route("/api/categories").post(create_Categories).get(get_Categories);
routes
  .route("/api/transaction")
  .post(create_Transaction)
  .get(get_Transactions)
  .delete(delete_Transaction);

routes.route("/api/labels").get(get_Labels);
module.exports = routes;
