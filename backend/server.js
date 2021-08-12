const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json()); // Using this instead of body parser

mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(()=>{
  console.log('Connected successfully!');
}).catch(err=>{
  console.log("Error connecting to the database!");
})

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

const itemsRoute = require("./routes/items");
const invoiceRoute = require("./routes/invoice");
app.use("/items", itemsRoute);
app.use("/invoice", invoiceRoute);
app.get("/", (req, res) => {
  res.send("works!");
});

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
