const router = require("express").Router();

const Subscription = require("../models/Subscription");

router.route("/").post(async (req, res) => {
  try {
    const { channelname, channelprofile, channelAdress, myaddress } = req.body;
    const join = false;
    console.log(req.body);
    const product = new Subscription({
      channelname,
      channelprofile,
      channelAdress,
      myaddress,
      join,
    });

    await product.save();
    console.log("sucsses");
    res.send({ message: "sucsses" });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.route("/check").post(async (req, res) => {
  const { myaddress, channelAdress } = req.body;

  try {
    const Result = await Subscription.find({
      $and: [{ myaddress: myaddress }, { channelAdress: channelAdress }],
    });
    console.log(Result);
    if (Result.length > 0) {
      console.log(Result[0].join);
      if (Result[0].join) {
        res.send({ flag: true, join: true });
        console.log("fhwohersdfsred");
      } else {
        res.send({ flag: true, join: false });
        console.log("fhwoher");
      }
    } else {
      res.send({ flag: false });
    }
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});
router.route("/unsubscribe").post(async (req, res) => {
  const { myaddress, channelAdress } = req.body;
  console.log(req.body);
  try {
    const Result = await Subscription.deleteMany({
      $and: [{ myaddress: myaddress }, { channelAdress: channelAdress }],
    });

    console.log(Result.length);
    res.send("deleted");
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.route("/join").post(async (req, res) => {
  try {
    const { myaddress, channelAdress, flag } = req.body;

    if (flag) {
      const Result = await Subscription.updateOne(
        {
          myaddress: myaddress,
          channelAdress: channelAdress,
        },

        { $set: { join: true } }
      );

      console.log(Result);
      console.log("join");
    } else {
      const Result = await Subscription.updateOne(
        {
          myaddress: myaddress,
          channelAdress: channelAdress,
        },

        { $set: { join: false } }
      );
      console.log(Result);
      console.log("unjoin");
    }
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.route("/adress").post(async (req, res) => {
  try {
    const address = req.body.address;
    console.log(req.body);
    const Result = await Subscription.find({ myaddress: { $eq: address } });
    console.log(Result);
    console.log(Result + "swlfo");
    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});
module.exports = router;
