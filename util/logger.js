/* eslint-env node */

// Require external modules
var bunyan = require('bunyan');
var config = require('../config/config');

var logger = bunyan.createLogger({
  name: config.appName,
  streams: [
      {
        stream: process.stdout,
        level: config.logLevels.console
      }
  ]
});

exports = module.exports = logger;
