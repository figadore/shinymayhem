/* eslint-env node */
// Customize this file with app routes and logic

// Include external dependencies
var fs = require('fs');
var express = require('express');
var path = require('path');
var marked = require('marked');

// Include local modules

// Setup

// Public
module.exports = {
  init: function init(app) {
    var apiRoot = "/";
    var apiRouter = express.Router();
    // Set api router for app
    app.use(apiRoot, apiRouter);
    addApiRoutes(apiRouter);
    app.set('views', path.join(__dirname, '..', 'views'));
    app.set('view engine', 'jade');
  }
};

/**
 * Add routes to express app
 *
 * @param {object} apiRouter
 */
function addApiRoutes(apiRouter) {
  // Root, return a list of available links
  apiRouter.get('*', function onRequest(req, res, next) {
    var filename = req.originalUrl + ".md"
    if (req.originalUrl === "/") {
      filename = "index.md";
    }
    file = fs.readFile(path.join("./markdown", filename), function onRead(err, data) {
      if (err) {
        if (err.code === "ENOENT") {
          return next();
        } else {
          return next(err);
        }
      }
      res.render('markdown', {markdown: marked(data.toString())});
    });
  });
}
