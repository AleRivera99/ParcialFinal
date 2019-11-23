const Mongoose = require("mongoose");


const RegisterSchema = Mongoose.Schema({
    Modelo:String,
    Memoria:String,
    Ram:String,
    Sistema:String

});

module.exports =Mongoose.model("Register", RegisterSchema);
