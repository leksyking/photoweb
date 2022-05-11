const errorHandlerMiddleware = (err, req, res, next) => {
    let customError =  {
        status: err.statusCode || 500,
        message: err.message || 'Something went wrong!, try again later.'
    }
    console.log(err);
    return res.status(customError.status).json({err: customError.message})
}

module.exports = errorHandlerMiddleware;