const jwt = require("jsonwebtoken")

const authMiddleware = async (req, res, next) => {
    try {
                               
        const token = req.header("x-auth-token") || req.header("Authorization")?.replace("Bearer", "");
        if (token) {
    
            const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
            console.log(decode, "===>")
            req.userId = decode.userId 
             
            next()
        } else {
            res.status(401).json({ message: "No token available" })
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = { authMiddleware }