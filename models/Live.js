const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Live = new mongoose.Schema({
  adress: { type: String, required: true },
  streamKEY: { type: String, required: true },
  streamURL: { type: String, required: true },
  free: { type: Boolean, required: true },
});

const Lives = mongoose.model("Lives", Live);
module.exports = Lives;
