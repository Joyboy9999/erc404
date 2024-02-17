const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
    Address: String,
    Payable: Boolean,
    Time: Date
});
module.exports = mongoose.model("404user", usersSchema)