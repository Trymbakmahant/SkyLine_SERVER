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
    const id = req.body.id;
    console.log(id);
    const Result = await Videos.find({ _id: { $eq: _id } });
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
    const Result = await Videos.find({ adress: { $eq: adress } });

    console.log(Result);
    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});
module.exports = router;
