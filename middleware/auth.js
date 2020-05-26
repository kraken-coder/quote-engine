const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    const token = req.header('x-auth-token')
    if(!token) {
        return res.status(401).json({msg : "Authoriztion denied"})
    }
    const secret = process.env.secret

    try {
       const decoded = jwt.verify(token, secret) 
       req.user  = decoded.user
       next()
    } catch (error) {
        res.send(401).json({msg: 'Token is not valid'})
    }
}