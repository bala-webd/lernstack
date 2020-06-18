const express = require("express");

const app = express();

const port = 8000;

const admin = (req, res) => {
  res.send("Home Dashboard");
};

app.get("/", (req, res) => {
  return res.send("Home page");
});

app.get("/login", (req, res) => {
  return res.send("you are visiting login");
});

app.get("/signup", (req, res) => {
  return res.send("you are visiting signup");
});

app.get("/:user/signout", (req, res) => {
  return res.send(req.params.user + " is signout");
});

const isAdmin = (req, res, next) => {
  console.log("Admin is running");
  next();
};

const isLoggedIn = (req, res, next) => {
  console.log("Hi Hitesh isLoggedIn middleware is running!");
  next();
};

app.get("/admin", isLoggedIn, isAdmin, admin);

app.listen(port, () => {
  console.log("Server is up and running...");
});

// const port = 3000;

// app.get("/", (req, res) => res.send("Hello World!"));

// app.listen(port, () =>
//   console.log(`Example app listening at http://localhost:${port}`)
// );
