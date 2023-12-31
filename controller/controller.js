const model = require("../models/model");
//create  Categories
const create_Categories = (req, res) => {
  const Create = new model.Categories({
    type: "Expense",
    color: "#C43095", //dark
  });
  Create.save()
    .then((result) => {
      return res.json(result);
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
const get_Transactions = (req, res) => {
  model.Transaction.find({})
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ message: `Error fetching transaction ${err}` });
    });
};
const delete_Transaction = (req, res) => {
  if (!req.body) return res.status(400).json({ message: "Request not found" });
  model.Transaction.deleteOne(req.body)
    .then((data) => {
      return res.json("Record Deleted...!");
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ message: `Error while deleting transaction Record` });
    });
};

const get_Labels = (req, res) => {
  model.Transaction.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "type",
        foreignField: "type",
        as: "categories_info",
      },
    },
    {
      $unwind: "$categories_info",
    },
  ])
    .then((result) => {
      let data = result.map((v) =>
        Object.assign(
          {},
          {
            _id: v._id,
            name: v.name,
            type: v.type,
            amount: v.amount,
            color: v.categories_info["color"],
          }
        )
      );
      return res.json(data);
    })
    .catch((err) => {
      return res.json(err);
    });
};
module.exports = {
  create_Categories,
  get_Categories,
  create_Transaction,
  get_Transactions,
  delete_Transaction,
  get_Labels,
};
