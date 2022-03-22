const createTokenUser = require('./createToken')
const {attachCookiesToResponse} = require('./jwt')

module.exports = {
    createTokenUser,
    attachCookiesToResponse
}