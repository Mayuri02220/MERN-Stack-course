

// login API
const login = async (req, res) => {
    try {

        res.status(201).json({ 
            message: "login successful",
        })

    } catch (error) {
        console.log(error)
    }
}





// register user API
const register = async (req, res) => {
    try {

         res.status(201).json({ 
            message: "register account successful",
        })

    } catch (error) {
        console.log(error)
    }
}


module.exports = { login, register }

