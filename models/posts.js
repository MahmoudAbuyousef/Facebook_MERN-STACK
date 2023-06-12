const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({ postBody: { type: String, required: true } });

module.exports = mongoose.model("Posts", postSchema);
