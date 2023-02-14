const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Live = new mongoose.Schema({
  adress: { type: String, required: true },
  streamKey: { type: String, required: true },
  playbackId: { type: String, required: true },
  Thumbnail: { type: String, required: true },
  Discription: { type: String, required: true },
  free: { type: Boolean, required: true },
});

const Lives = mongoose.model("Lives", Live);
module.exports = Lives;
