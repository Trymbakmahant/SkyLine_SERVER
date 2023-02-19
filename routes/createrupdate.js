const router = require("express").Router();

const Creater = require("../models/creater");

router.route("/").post(async (req, res) => {
  try {
    console.log(req.body);
    const {
      channelname,
      about,
      channelprofile,
      channelbackground,
      address,
      numberOfSubscribers,
      name,
    } = req.body;
    console.log(req.body);
    const product = new Creater({
      channelname,
      about,
      channelprofile,
      channelbackground,
      address,
      numberOfSubscribers,
      name,
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
router.route("/adress").post(async (req, res) => {
  try {
    const adress = req.body.adress;
    console.log(adress);
    const Result = await Creater.find({ address: { $eq: adress } });
    // if (Result.length > 0) {
    //   res.send(true);
    // } else {
    //   res.send(false);
    // }
    console.log(adress);
    // console.log(Result);
    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});
module.exports = router;
