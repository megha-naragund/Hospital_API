const Report = require("../models/reportsModel");
const  asyncHandler = require("express-async-handler")
// Description Create report for the patient
// Post request
const createReport = asyncHandler( async (req,res)=>{
    const{patientId,status} = req.body;
    const doctorName = req.user.name;
    if(!patientId || ! status || ! doctorName){
        res.status(401);
        throw new Error(" All fields are mandatory!");
    }
    
    console.log("Report generated!" ,patientId, status );
    const reportInfo = await Report.create({
        doctorName,patientId, status
    })
    if(reportInfo){
        res.status(200).json(reportInfo);
    }
    else{
        res.send(401);
        res.send("Error occured!");
    }

    
});

// Description CreateFetch all the reports of the patient
// Get request
const getAllReports = asyncHandler( async (req,res)=>{
    const {patientId} = req.params.id;
    //console.log("req id ............",req.params.id);
    const reports = await Report.find(patientId);
    console.log(reports)
    res.status(200).json(reports);
});

const getAllReportsByStatus =asyncHandler( async(req,res)=>{
    const {status} = req.params.status;
    const reports = await Report.find(status);
     console.log("status..................." ,req.params.status);
    res.status(200).json(reports);
    //res.status(200).send("List all the reports Filtered by status");
});
module.exports ={createReport,getAllReports,getAllReportsByStatus}