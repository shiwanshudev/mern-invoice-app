const express = require("express");
const router = express.Router();
const Item = require("../models/item");

router.route("/").get((req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;

  const newItem = new Item({
    name,
    description,
    price,
  });

  newItem
    .save()
    .then(() => {
      res.json("Item added!");
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/:id").delete((req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json("Item deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
