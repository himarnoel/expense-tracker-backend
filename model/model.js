const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Categories
const categories_model = new Schema({
  type: { type: string, default: "Investment" },
  color: { type: string, default: "#FCBE44" },
});

//transaction
const transaction_model = new Schema({
  name: { type: string, default: "Anonymous" },
  type: { type: string, default: "Investment" },
  amount: { type: Number, default: "Investment" },
  date: { type: Date, default: Date.now() },
});

const Categories = mongoose.model("categories", categories_model);
const Transaction = mongoose.model("transaction", transaction_model);

exports.default = Transaction;
module.exports = {
  Categories,
  Transaction,
};
