const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
// validating jwt token from the client
const validateToken = asyncHandler(async(req,res,next)=>{
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        console.log("token from middleware :", token);
        // validate token using secrect code
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRECT,(err,decoded)=>{
            if(err){
                res.status(402);
                throw new Error("User not authorized");
            }
            console.log(decoded);
            req.user = decoded.user;    
            next();
        })
    }
});
module.exports = validateToken;