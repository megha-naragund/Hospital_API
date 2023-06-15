const express= require("express");
const connectDb= require("./config/dbConnection");
const { errorHandler } = require("./middleware/errorHandler");

connectDb();
const app = express();
const dotenv  = require("dotenv").config();
const port = process.env.PORT || 5000;

// to parse the data which we get from client
app.use(express.json());
//to parse error in json format
app.use(errorHandler);
app.use("/", require(
    "./routes/hospitalRoutes"
));


app.listen(port,()=>{
    console.log("Server running on Port : "+port);
});