const router = require("express").Router();

const Live = require("../models/Live");

// for uploading lives list
router.route("/").post(async (req, res) => {
  try {
    const { adress, streamKEY, streamURL, free } = req.body;

    const product = new Live({
      adress,
      streamKEY,
      streamURL,
      free,
    });

    await product.save();

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
    const Result = await Live.find({ _id: { $eq: _id } });
    console.log(Result);
    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
