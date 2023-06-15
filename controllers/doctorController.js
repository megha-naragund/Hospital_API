// Create/Registering the doctor in database
// Post request
const Doctor = require("../models/doctorInfoModel");
//library to encrypt the library
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
//To handler error in async block
const asyncHandler = require("express-async-handler");

const register = asyncHandler(async (req,res)=>{
    console.log("doctor reg info: "+ JSON.stringify(req.body));
    console.log("doctor reg info: "+ JSON.stringify(req.body));
    const {name,password} = req.body;
    const reqEmail =req.body.email;
    
    console.log("Validating fileds : ",name,reqEmail,password);
    
    if(name === undefined || reqEmail === undefined || password === undefined){
        res.status(401);
        throw new Error("All fileds are mandatory!!");
        //res.json({"Message" :"All fileds are mandatory!"}); // handler error without asyncHandler

    }
   
    let doctorExists = await Doctor.findOne({email: reqEmail}); 
    console.log("doctor exists",doctorExists);
    if(doctorExists){
        res.status(200).send("Doctor already exits!");
        //process.exit(1);
    }
    else{
         //Hash password
        const hashedPassword = await bcrypt.hash(password,10);
        console.log("Password adfter hashing: ",hashedPassword);
        const doctorInfo = await Doctor.create({
            name,email:reqEmail,password:hashedPassword
        });
        if(doctorInfo){
            res.status(200).send("Doctor is registring using name and password");
        }
       else{
            res.status(404);
            throw new Error("Error while creating user");
       }    
    }
    
});


// Login the doctor if the user is present in database
// Post request
const login = asyncHandler(async (req,res)=>{
    const {email,password} = req.body;
    console.log("Checking on email and password: ",email,password);
    if(!email || !password){
        res.status(401);
        throw new Error("All fileds are mandatory!");
    }
    
    const user = await Doctor.findOne({email});
    console.log("User found : ",user );
    if(user && await bcrypt.compare(password,user.password)){
        const accessToken = jwt.sign({
            user:{
               name : user.name,
               email: user.email,   
               id: user.id 
            }
        }, process.env.ACCESS_TOKEN_SECRECT,
        {expiresIn : "10m"} // expiration of token
        );
        res.status(200);
        res.json({accessToken});
    }
    else{
        res.status(401)
        throw new Error("Email or password is incorrect!");
    }

    // console.log(req.url);
    // res.send("Doctor login verification using JWT");
})

module.exports ={register,login}