const model = require("../models/model");
//get all Categories
const create_Categories = (req, res) => {
  const Create = new model.Categories({
    type: "Expense",
    color: "#C43095", //dark
  });
  Create.save()
    .then((resi) => {
      return res.json(Create);
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ message: `Error while creating categories ${err}` });
    });
};
//get all Categories
const get_Categories = async (req, res) => {
  model.Categories.find({})
    .then((data) => {
      let filter = data.map((v) =>
        Object.assign({}, { type: v.type, color: v.color })
      );
      return res.json(filter);
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ message: `Erro occurred while fetching data` });
    });
};
const create_Transaction = (req, res) => {
  if (!req.body) return res.status(400).json("POST HTTP requires data");
  let { name, type, amount } = req.body;
  const create = new model.Transaction({
    name,
    type,
    amount,
    date: new Date(),
  });
  create
    .save()
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ message: `Error creating transaction ${err}` });
    });
};
module.exports = {
  create_Categories,
  get_Categories,
  create_Transaction,
};
