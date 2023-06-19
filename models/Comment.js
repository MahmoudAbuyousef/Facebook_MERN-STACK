const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({ commentBody: { type: String, required: true } });

module.exports = mongoose.model("Comments", commentSchema);
