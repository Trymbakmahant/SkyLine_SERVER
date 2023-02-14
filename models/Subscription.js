const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Subscription = new mongoose.Schema({
  channelname: { type: String, required: true },
  channelprofile: { type: String, required: true },
  channelAdress: { type: String, required: true },
  myaddress: { type: String, required: true },
});

const Subscriptions = mongoose.model("Subscriptions", Subscription);
module.exports = Subscriptions;
