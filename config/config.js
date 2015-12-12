/* eslint-env node */
/* eslint no-process-env: 0 */
var config = {};

config.env = process.env.NODE_ENV || "production";

config.port = process.env.NODE_PORT || 80;

module.exports = config;
