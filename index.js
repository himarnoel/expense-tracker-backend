const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require("./routes/route"));
// connection to db
const con = require("./db/connection.js");
con
  .then((db) => {
    if (!db) return process.exit(1);
    //Listen
    app.listen(process.env.PORT, () =>
      console.log(`Example app listening on port ${process.env.PORT}!`)
    );
    app.on("error", (err) =>
      console.log(`Failed to Connect  with HTTP Server:${err}`)
    );
  })
  .catch((err) => {
    console.log(`Connection failed with :${err}`);
  });
