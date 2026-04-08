
const mongoose = require("mongoose")


const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_DB_URL) //connect node.js server with mongodb database
            .then(() => console.log("mongo DB connected"))
            .catch((error) => console.log("error"))

    } catch (error) {
        console.log(error)
    }
}

module.exports = { connectDB }