const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
    doctorName :{
        type: String,
        required: true
    },
    patientId :{
        type: String,
        required: true
    },
    status :{
        type: String,
        enum: ['Negative', 'Travalled-Quarantine','Symptoms-Quarantine','Positive-Admit']
    }
},{
    timeStamp: true
});

module.exports = mongoose.model("Report",reportSchema);