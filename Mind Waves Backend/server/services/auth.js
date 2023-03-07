const jwt = require('jsonwebtoken')

exports.authenticate = async (req, res, next) => {
    let info = req.headers.authorization
    const token = info.split(" ")[1]
    console.log(token)
    const decode = await jwt.verify(token, "jwtkey")
    req.userid = decode.uid
next()

} 