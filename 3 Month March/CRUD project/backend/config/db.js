
const mongoose = require("mongoose")


const connectDB = () => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/Item-database") //connect node.js server with mongodb database
            .then(() => console.log("mongo DB connected"))
            .catch((error) => console.log("error"))

    } catch (error) {
        console.log(error)
    }
}

module.exports = { connectDB }