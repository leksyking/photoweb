const errorHandlerMiddleware = (err, req, res) => {
    let customError =  {
        status: err.statusCode || 500,
        message: err.message || 'Something went wrong!, try again later.'
    }
    console.log(err);
    res.status(customError.status).json({err: customError.message})
}

module.exports = errorHandlerMiddleware;