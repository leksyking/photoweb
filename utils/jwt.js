const jwt = require('jsonwebtoken')


const createJWT = ({payload}) => {
    //can decide exclude expiresIn
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
    return token
}

const isTokenValid = (token)  => jwt.verify(token,  process.env.JWT_SECRET )

const attachCookiesToResponse = ({res, user}) => {
    const token  = createJWT({payload: user})

    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie('token', token, {
        httpOnly: true,
        signed: true,
        expires: new Date(Date.now() + oneDay),
        secured: process.env.NODE_ENV === 'production'
    })
}

module.exports = {
    createJWT,
    attachCookiesToResponse,
    isTokenValid
}