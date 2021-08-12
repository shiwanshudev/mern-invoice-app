const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    invoice: [],
  },
  { timestamps: true }
);

const Invoice = new mongoose.model("Invoice", invoiceSchema);
module.exports = Invoice;
