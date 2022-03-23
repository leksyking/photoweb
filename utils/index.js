const createTokenUser = require('./createToken')
const {attachCookiesToResponse, isTokenValid} = require('./jwt')
const checkPermission = require('./checkPermissions')

module.exports = {
    createTokenUser,
    attachCookiesToResponse,
    isTokenValid,
    checkPermission
}