const { Logger } = require("logger");
const logger = new Logger("Middleware");

function logRequest(req, res, next) {
  logger.info(`Original Url:${req.originalUrl}`);
  logger.info(`Request Path:${req.path}`);
  logger.info(`Request IP:${req.ip}`);
  next();
}

module.exports = { logRequest };
