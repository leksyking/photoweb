const { BadRequestError, UnAuthenticatedError } = require("../errors");
const { isTokenValid } = require("../utils");

const authenticationMiddleware = (req, res, next) => {
    try {
        let {token} = req.signedCookies;

        if(!token){
            throw new UnAuthenticatedError('Authentication failed')
        }
        const payload = isTokenValid(token)
        req.user = {userId: payload.userId, username: payload.username}
        next()
    } catch (error) {
        throw new UnAuthenticatedError('Authentication failed')
    }
}

module.exports = authenticationMiddleware