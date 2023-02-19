const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Live = new mongoose.Schema({
  address: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  title: { type: String, required: true },
  playerid: { type: String, required: true },
  totalview: { type: String, required: true },
  createrprofile: { type: String, required: true },
  free: { type: Boolean, required: true },
});

const Lives = mongoose.model("Lives", Live);
module.exports = Lives;
