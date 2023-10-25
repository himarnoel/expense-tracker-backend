const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Categories
const categories_model = new Schema({
  type: { type: string, default: "Investment" },
 color: { type: string, default: "#FCBE44" },
});

