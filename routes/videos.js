const router = require("express").Router();

const Videos = require("../models/videos");

router.route("/").post(async (req, res) => {
  try {
    const {
      address,
      description,
      thumbnail,
      playerid,
      title,
      totalview,
      free,
    } = req.body;

    const product = new Videos({
      address,
      description,
      thumbnail,
      playerid,
      title,
      totalview,
      free,
    });

    await product.save();
    console.log("sucsses");
    res.send({ message: "sucsses" });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.route("/all").post(async (req, res) => {
  try {
    const Result = await Videos.find();

    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.route("/id").post(async (req, res) => {
  try {
    const playerid = req.body.playerid;

    const Result = await Videos.find({ playerid: { $eq: playerid } });
    console.log(Result);
    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.route("/adress").post(async (req, res) => {
  try {
    const address = req.body.address;
    console.log(req.body);
    const Result = await Videos.find({ address: { $eq: address } });

    console.log(Result + "swlfo");
    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});
module.exports = router;
