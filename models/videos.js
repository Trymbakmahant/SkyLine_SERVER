const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Video = new mongoose.Schema({
  adress: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },

  playerid: { type: String, required: true },
  totalview: { type: String, required: true },
  free: { type: Boolean, required: true },
});

const Videos = mongoose.model("Videos", Video);
module.exports = Videos;
