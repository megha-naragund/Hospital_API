const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");
const patientController =require("../controllers/patientController");
const reportController =require("../controllers/reportController");
const validateToken =require("../middleware/validateToken");

//post request
//doctor
router.route('/doctors/register').post (doctorController.register);
router.route('/doctors/login').post (doctorController.login);
//patients
router.route('/patients/register').post (patientController.register);
router.route('/patients/:id/create_report').post (validateToken, reportController.createReport);

/// get requests
router.route('/patients/:id/all_reports').get (validateToken, reportController.getAllReports);
router.route('/reports/:status').get (validateToken, reportController.getAllReportsByStatus);

module.exports = router;