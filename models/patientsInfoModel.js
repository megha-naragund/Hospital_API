const mongoose = require("mongoose");

const patientsSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    phoneNo:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model("Patient", patientsSchema);