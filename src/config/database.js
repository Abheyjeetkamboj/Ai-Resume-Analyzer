const mongoose=require("mongoose");
const { cloneElement } = require("react");

async function connectToDB(){
    try {mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to Database");}
    catch(err){
        console.log(err);
    }
}
module.exports = connectToDB