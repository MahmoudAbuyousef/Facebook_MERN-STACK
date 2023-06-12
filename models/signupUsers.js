const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userData = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  emailorphone: { type: String, required: true },
  password: { type: String, required: true },
  day: { type: String, required: true },
  month: { type: String, required: true },
  year: { type: String, required: true },
  gender: { type: String, required: true },
});

module.exports = mongoose.model("users", userData);
