# Hospital_API

# Features:
1. Designed an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine and well being of  COVID-19 patients
2. There can be 2 types of Users
    i. Doctors
    ii. Patients
3. Doctors can log in and each time a patient visits, the doctor will follow 2 steps
    i. Register the patient in the app (using phone number, if the patient already exists, just return the patient info in the API)
    ii. After the checkup, create a Report
4. Patient Report have the following fields
    i. Created by doctor
    ii. Status will be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit]
    iii. Date
   
# Required Routes:

/doctors/register → with username and password
/doctors/login → returns the JWT to be used
/patients/register 
/patients/:id/create_report
/patients/:id/all_reports → List all the reports of a patient oldest to latest
/reports/:status  → List all the reports of all the patients filtered by a specific status
