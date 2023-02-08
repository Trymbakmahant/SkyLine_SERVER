const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Creater = new mongoose.Schema({
  channelname: { type: String, required: true },
  about: { type: String, required: true },
  channelImage: { type: String, required: true },
  videos: { type: Array, required: true },
  totalview: { type: String, required: true },
  numberOfSubscribers: { type: String, required: true },
});

const Creaters = mongoose.model("Creaters", Creater);
module.exports = Creaters;
