const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({ storyBody: { type: String, required: true } });

module.exports = mongoose.model("Stories", storySchema);
