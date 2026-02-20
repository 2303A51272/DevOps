const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: String,
  amount: Number,
  date: Date
});
module.exports = {
  Expense: mongoose.model("Expense", schema),
  Income: mongoose.model("Income", schema)
};