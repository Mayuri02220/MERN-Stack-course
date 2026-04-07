// user list table in database

const mongoose = require("mongoose")

//schema-model-database table structure

//define structure of item documents in mongodb
const usersSchema = new mongoose.Schema({

    //variable : datatype 
    name : String,
    email : String,
    password : String
   
})

const Users = mongoose.model("Users",usersSchema )

module.exports = Users
