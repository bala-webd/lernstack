require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//routes
const authRoutes = require("./routes/authentication");

//db connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api", authRoutes);

//port
const port = process.env.PORT || 8000;

//starting server
app.listen(port, () => {
  console.log(`app is running in port ${port}`);
});
