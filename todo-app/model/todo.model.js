const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    label : {
        type : String,
        required : true,
        trim : true
    },
    status : {
        type : Boolean,
        default : false,
        trim : true
    }
})

const Todo = mongoose.model("Todos", TodoSchema);

module.exports = Todo;