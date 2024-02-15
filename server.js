var express = require("express");
var app = express ();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views")
app.use("/scripts", express.static(__dirname+"/node_modules/web3.js-browser/build/"))
// socketio
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));


require("./controllers/mint")(app);