//  import mongoose
const mongoose = require("mongoose");

//  create an instance of mongoose
const IdeaSchema = new mongoose.Schema({
   //   define all object for the iddea
    text :
    {
        type : String,
        required : [true, "please add a text"]
    },
    tag :
    {
        type : String,
    },
    username :
    {
        type : String,
    },
    date :
    {
        type : Date,
        default : Date.now
    }
})

//  export idea
module.exports = mongoose.model("Idea", IdeaSchema);