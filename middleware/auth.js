const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function(req, res, next){
    // get token
    const token = req.header('x-auth-token')

    // if token
    if(!token)
        return res.status(401).json({ msg: 'No token, authorization denied'})

    // verfy token
    try{
        const decode = jwt.verify(token, config.get('jwtSecret'))
        req.user = decode.user
        next()
    }catch(err) {
        res.status(401).json({ msg: 'Token is not valid'})
    }
}