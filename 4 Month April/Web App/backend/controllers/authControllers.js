
const jwt = require("jsonwebtoken")
const Users = require("../models/userModel")




// register user API
const register = async (req, res) => {
    try {

        const { name, city, mob, email, pass } = req.body

        const existingUser = await Users.findOne({ email: email })
        if (existingUser) {
            return res.status(400).json({ message: "This email Id Allready Register" })
        }

        const user = await Users.create({
            name,
            city,
            mob,
            email,
            password: pass
        })

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: "30d"
        })

        res.status(201).json({
            message: "register account successful",
            data: user,
            token: token
        })

    } catch (error) {
        console.log(error)

        res.status(404).json({
            message: " Error while register account ",
            error: error.message
        })
    }
}






// login API
const login = async (req, res) => {
    try {

        const { email, pass } = req.body

        const user = await Users.findOne({
            email, password: pass
        })

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: "30d"
        })

        if (user) {
            res.status(201).json({
                message: "login successful",
                token: token
            })
        } else {
            res.status(404).json({
                message: "  login failed",
            })
        }

    } catch (error) {
        console.log(error)

        res.status(404).json({
            message: " Error while login account ",
            error: error.message
        })
    }
}


module.exports = { login, register }

