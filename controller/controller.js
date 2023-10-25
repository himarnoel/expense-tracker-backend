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

const get_Categories = async (req, res) => {
  let data = await model.Categories.find({});
  return res.json(data);
};
module.exports = {
  create_Categories,
  get_Categories,
};
