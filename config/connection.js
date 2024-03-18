const mongoose = require("mongoose");
const url = "mongodb+srv://shital:K6hG1Slg96a2TyAS@cluster0.cgied51.mongodb.net/test?retryWrites=true&w=majority&appName=cluster0";
const connection = async () => {
    try {
        console.log("Connecting Please wait...");
        const con = await mongoose.connect(url);
        console.log("connected");
    } catch (error) {
        throw Error(error)
    }
}
module.exports = connection
