const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        console.log("Server is connected to DB");
    }).catch( err => {
        console.log("Error connecting Database", err);
        process.exit(1); // stops server if database isn't connected
    } )
}


module.exports = connectDB;