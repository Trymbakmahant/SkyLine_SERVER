const router = require("express").Router();

const Shorts = require("../models/shorts");

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

    const product = new Shorts({
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
    const Result = await Shorts.find();

    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.route("/id").post(async (req, res) => {
  try {
    const id = req.body.id;
    console.log(id);
    const Result = await Shorts.find({ _id: { $eq: _id } });
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
    const Result = await Shorts.find({ address: { $eq: address } });

    console.log(Result + "swlfo");
    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});
module.exports = router;
