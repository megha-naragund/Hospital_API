const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
    name:{
        type: String,
        required :[true, "Name is mandatory to add"]
    },
    email:{
        type: String,
        required :[true, "Email is mandatory to add"]
    },
    password:{
        type: String,
        required :[true, "password is required"]
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Doctor",doctorSchema);