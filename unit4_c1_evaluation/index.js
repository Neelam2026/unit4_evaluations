const express = require("express");
const app = express();

app.use(logger);

app.get("/books", (req, res) => {
  return res.send({ route: "/books" });
});

app.get("/libraries", checkPermission("librarian"), (req, res) => {
  return res.send({ route: "/libraries", permission: req.permission });
});
app.get("/authors", checkPermission("author"), (req, res) => {
  return res.send({ route: "/authors", permission: req.permission });
});

function logger(req, res, next) {
  console.log(req.path);
  next();
}

function checkPermission(role) {
  return function logger1(req, res, next) {
    if (req.path === "/libraries" || req.path === "/authors") {
      req.permission = true;
      return next();
    }
  };
}

app.listen(6004, () => {
  console.log("listening port 6004");
});
