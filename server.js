require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./db");
const Live = require("./routes/Live");
const Creater = require("./routes/createrupdate");
const Video = require("./routes/videos");

connection();

// middlewares
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/Videos", Video);
app.use("/Lives", Live);
app.use("/Creaters", Creater);

const port = 8081;
app.listen(port, console.log(`Listening on port ${port}...`));
