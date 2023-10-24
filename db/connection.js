const { default: mongoose } = require("mongoose");
const conn = mongoose
  .connect(process.env.URI)
  .then((db) => {
    console.log("Database Connected");
    return db;
  })
  .catch((e) => {
    console.log("Database Not Connected");
  });

module.exports = conn;
