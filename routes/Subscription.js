const router = require("express").Router();

const Subscription = require("../models/Subscription");

router.route("/").post(async (req, res) => {
  try {
    const { channelname, channelprofile, channelAdress, myaddress } = req.body;

    const product = new Subscription({
      channelname,
      channelprofile,
      channelAdress,
      myaddress,
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
    const Result = await Subscription.find();

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
    const Result = await Subscription.find({ _id: { $eq: _id } });
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
    const Result = await Subscription.find({ address: { $eq: address } });

    console.log(Result + "swlfo");
    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});
module.exports = router;
