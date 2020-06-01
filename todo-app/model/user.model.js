const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        trim : true
    },
    password :{
        required : true,
        type: String,
        trim : true
    }
})

const User = mongoose.model("Users", UserSchema);

module.exports = User;