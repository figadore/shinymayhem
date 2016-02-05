/* eslint-env node */
/* eslint no-process-env: 0 */
var config = {};

config.appName = "node-js-app";

config.env = process.env.NODE_ENV || "production";

config.port = process.env.NODE_PORT || 80;

config.logLevels = {};
if (config.env === "production") {
  config.logLevels.console = "info";
} else {
  config.logLevels.console = "debug";
}


module.exports = config;
