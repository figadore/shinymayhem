/* eslint-env node */

// Require external modules
var bunyan = require('bunyan');
var errorSerializer = require('shiny-express-errors').serializer;

// Require local modules
var config = require('../config/config');

var logger = bunyan.createLogger({
  name: config.appName,
  serializers: {
    err: errorSerializer
  }
});

// Also log to stdout at custom level
logger.addStream({
  stream: process.stdout,
  level: config.logLevels.console
});

exports = module.exports = logger;
