const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Creater = new mongoose.Schema({
  channelname: { type: String, required: true },
  about: { type: String, required: true },
  channelprofile: { type: String, required: true },
  channelbackground: { type: String, required: true },
  address: { type: String, required: true },
  numberOfSubscribers: { type: String, required: false },
});

const Creaters = mongoose.model("Creaters", Creater);
module.exports = Creaters;
