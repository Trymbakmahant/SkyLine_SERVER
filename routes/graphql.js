const router = require("express").Router();
const { gql, createClient } = require("@urql/core");
router.route("/oneflow").post(async (req, res) => {
  try {
    res.send({ message: "sucsses" });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
