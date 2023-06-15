
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://meghanaragund2606:1234@cluster0.ukagdef.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function connectDb() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// module.exports =connectDb;


const mongoose = require("mongoose");
const dotenv  = require("dotenv").config();

const connectDb = async ()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected: ",connect.connection.host,connect.connection.name);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDb;