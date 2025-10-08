/**
 * Create a standardized HTTP response
 */
const createResponse = (statusCode, body, headers = {}) => {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      ...headers,
    },
    body: JSON.stringify(body),
  };
};

/**
 * Success response
 */
const successResponse = (data, message = 'Success') => {
  return createResponse(200, {
    success: true,
    message,
    data,
  });
};

/**
 * Created response
 */
const createdResponse = (data, message = 'Created successfully') => {
  return createResponse(201, {
    success: true,
    message,
    data,
  });
};

/**
 * Error response
 */
const errorResponse = (statusCode, message, error = null) => {
  return createResponse(statusCode, {
    success: false,
    message,
    error: error ? error.message : null,
  });
};

/**
 * Not found response
 */
const notFoundResponse = (message = 'Resource not found') => {
  return errorResponse(404, message);
};

/**
 * Bad request response
 */
const badRequestResponse = (message = 'Bad request', error = null) => {
  return errorResponse(400, message, error);
};

/**
 * Internal server error response
 */
const serverErrorResponse = (message = 'Internal server error', error = null) => {
  return errorResponse(500, message, error);
};

module.exports = {
  createResponse,
  successResponse,
  createdResponse,
  errorResponse,
  notFoundResponse,
  badRequestResponse,
  serverErrorResponse,
};

