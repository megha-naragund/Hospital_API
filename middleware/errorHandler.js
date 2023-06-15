//This is middleware to Handle the error and thorws the error based on the status code
exports.errorHandler =(err,req,res,next) =>{
    const statusCode = res.statusCode ? res.statusCode : 450;
    res.json({message: err.message, stackTrace: err.stack});
    // to handle mutiple error with proper title
    switch(statusCode){
        case 401:res.json({
            title: "Validation Failed!",
            message: err.message, 
            // stackTrace: err.stack
        });
        case 404:res.json({
            title: "Page Not Found!!",
            message: err.message, 
            // stackTrace: err.stack
        });
        case 450:res.json({
            title: "Error not defined!",
            message: err.message, 
            // stackTrace: err.stack
        });
    }
}