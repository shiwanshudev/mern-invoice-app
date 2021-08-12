const express = require("express");
const router = express.Router();
const Invoice = require("../models/invoice");

router.route("/").post((req, res) => {
  const invoice = req.body.invoice;
  const newInvoice = new Invoice({
    invoice,
  });
  newInvoice
    .save()
    .then(() => res.json("Invoice Created!"))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/").get((req, res) => {
  Invoice.find()
    .then((invoices) => res.json(invoices))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Invoice.findById(req.params.id)
    .then((invoice) => res.json(invoice))
    .catch((err) => res.status(400).catch("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Invoice.findByIdAndDelete(req.params.id)
    .then(() => res.json("Invoice Deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
