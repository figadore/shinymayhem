/* eslint-env node */

// Require external modules
var express = require('express');
var bodyParser = require("body-parser");
var errorHandler = require('shiny-express-errors');
var requestFormatter = require('shiny-express-formatter');

// Require local modules
var config = require('../config/config');

// Set up initial variables
var server;
var app = express();

// Uncaught error handling
app.use(errorHandler.handleUncaughtErrors({
  callback: function onUncaughtErrorCallback(err, req) {
    //Close any remaining open connections
    console.log(err.stack);
    server.close();
    var data = {
      severity: "fatal",
      "_type": "error",
      err: err
    };
    if (req.hasOwnProperty('id')) {
      data.requestId = req.id;
    }
    console.log(data);
  }
}));

//Pretty print json responses (maybe only do this in development, or when ?pretty=true)
app.set('json spaces', 2);

// Serve static files
app.use(express.static('public'));

// Parse json if it is included in the request
app.use(bodyParser.json({
  type: ["*/json", "*/*+json"]
}));

// Log requests and responses (ensure body parsing middleware is already set)
app.use(requestFormatter.formatRequests({
  captureRequestBody: true,
  captureResponseBody: true,
  callback: function logRequest(formattedRequest, formattedResponse) {
    console.log("request", formattedRequest);
    console.log("response", formattedResponse);
  }
}));

app.get('*', function getAny(req, res, next) {
  res.json({"success": true});
});

// Normal error handling
app.use(errorHandler.handleErrors({
  showDetails: (config.env !== "production"),
  describedBy: "none",
  callback: function onErrorCallback(err, req) {
    console.log(err.stack);
    var data = {
      "_type": "error",
      err: err
    };
    if (req.hasOwnProperty('id')) {
      data.requestId = req.id;
    }
    console.log(data);
  }
}));

// 404 for all remaining routes
app.all('*', function onRequest(req, res, next) {
  //console.log("route not found");
  errorHandler.sendError(req, res, 404, "Route not found");
});

server = app.listen(config.port);

console.log("Started server on port " + config.port);

module.exports = app;
