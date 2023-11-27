const ErrorHandler = (err, req, res, next) => {
    console.log("Error handling Middleware");
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Oops! There is an error';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    })
}

module.exports = ErrorHandler;