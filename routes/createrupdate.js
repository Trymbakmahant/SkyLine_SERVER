const router = require("express").Router();

const Creater = require("../models/creater");

router.route("/").post(async (req, res) => {
  try {
    const {
      channelname,
      about,
      channelprofile,
      channelbackground,
      address,
      numberOfSubscribers,
    } = req.body;

    const product = new Creater({
      channelname,
      about,
      channelprofile,
      channelbackground,
      address,
      numberOfSubscribers,
    });

    await product.save();

    res.send({ message: "sucsses" });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.route("/all").post(async (req, res) => {
  try {
    const Result = await Creater.find();

    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.route("/channelname").post(async (req, res) => {
  try {
    const channelname = req.body.channelname;
    console.log(channelname);
    const Result = await Creater.find({ channelname: { $eq: channelname } });
    console.log(Result);
    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});
module.exports = router;