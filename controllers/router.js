var DBusers = require("../models/404users");

module.exports = function (app, io) {
  var total_view = 0;
  
  /// Server databse
  app.get("/user", function (req, res) {
    DBusers.find()
      .then((users) => {
        res.render("DBcontrol.ejs", { users, total_view });
      })
      .catch((error) => {
        res.json(error);
      });
  });

  // Mainlayout
  app.get("/", function (req, res) {
    res.render("layout");
  });
  app.get("/2", function (req, res) {
    res.render("index");
  });

  // Post to database
  app.post("/setuser", function (req, res) {
    if (!req.body.Address) {
      res.json({ result: 0, Status: "Not enough paramater" });
    } else {
      var newuser = new DBusers({
        Address: req.body.Address,
        Payable: true,
        Time: Date.now(),
      });
      newuser.save(function (err) {
        if (err) {
          res.json({ result: 0, Status: "Save database error" });
        } else {
          res.json({ result: 1, Status: "Success!" });
        }
      });
    }
  });

  // Traffic tracker
  io.on("connection", function (socket) {
    total_view += 1;
    io.emit("updateTotalView", { total_view: total_view });

    socket.on("disconnect", function () {
      total_view -= 1;
      io.emit("updateTotalView", { total_view: total_view });
    });
  });
};
