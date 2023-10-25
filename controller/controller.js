const model = require("../models/model");
//get all Categories
const create_Categories = async (req, res) => {
  const Create = new model.Categories({
    type: "Expense",
    color: "#C43095", //dark
  });
  await Create.save()
    .then((resi) => {
      return res.json(Create);
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ message: `Error while creating categories ${err}` });
    });
};

module.exports = {
  create_Categories,
};
