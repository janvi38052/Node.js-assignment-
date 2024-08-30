const statusCodes = require('../utils/statusCode');
const errorMessages = require('../utils/errorMessage');

const errorHandler = (err, req, res, next) => {
  console.error('Error occurred:', err.message);
  console.error('Stack trace:', err.stack);

  const status = err.status || statusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || errorMessages.INTERNAL_ERROR;

  res.status(status).json({
    error: {
      message: message
    }
  });
};

module.exports = errorHandler;
