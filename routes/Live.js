const router = require("express").Router();

const Live = require("../models/Live");

// for uploading lives list
router.route("/").post(async (req, res) => {
  try {
    const {
      address,
      description,
      thumbnail,
      playerid,
      title,
      totalview,
      createrprofile,
      free,
    } = req.body;
    console.log(req.body);

    const product = new Live({
      address,
      description,
      thumbnail,
      playerid,
      title,
      createrprofile,
      totalview,
      free,
    });

    await product.save();
    console.log(req.body);
    res.send({ message: "sucsses" });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

// for retriving how much Live are live
router.route("/all").post(async (req, res) => {
  try {
    const Result = await Live.find();
    console.log(Result);
    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.route("/id").post(async (req, res) => {
  try {
    const playerid = req.body.playerid;

    const Result = await Live.find({ playerid: { $eq: playerid } });
    console.log(Result);
    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
