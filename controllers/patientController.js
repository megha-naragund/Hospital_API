const Patient = require("../models/patientsInfoModel");
const asyncHandler = require("express-async-handler");
// Registering the patient in database
// Post request
const register = asyncHandler(async (req,res)=>{
    const {name,phoneNo} = req.body;
    if(name === undefined || phoneNo === undefined){
        res.status(401);
        throw new Error("All fileds are mandatory");
    }
    const user = Patient.findOne(phoneNo);
    if(user){
        res.status(401);
        throw new Error("Patient already Patient.exists");
        //res.status(200).json(user);
    }
    else{
        const patientInfo = await Patient.create({
            name,phoneNo
        });
        res.status(200).json(patientInfo);
    }
    
});



module.exports ={register}