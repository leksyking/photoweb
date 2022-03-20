const NotFoundError = require('./not-found')
const BadRequestError = require('./bad-request')
const UnAuthenticatedError = require('./unauthenticated')
const UnAuthorizedError = require('./unauthorized')

module.exports = {
    NotFoundError,
    BadRequestError,
    UnAuthenticatedError,
    UnAuthorizedError
}