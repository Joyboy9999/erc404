var express = require("express");
var app = express ();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views")
app.use("/scripts", express.static(__dirname+"/node_modules/web3.js-browser/build/"))
// socketio
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(80);

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

// database 

const mongoose = require('mongoose'); 
mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://joyboy124:IhIFKUuXtfFzkHHm@cluster0.y78rjge.mongodb.net/erf404?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if(err){
        console.log("Database fail: "+ err)
    } else
    {
        console.log("Database connect success")
    }
});

require("./controllers/mint")(app);