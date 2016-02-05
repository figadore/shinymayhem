/* eslint-env node */
// Customize this file with app routes and logic

// Include external dependencies

// Include local modules

/**
 * Get the host used in the request
 *
 * @param {object} req
 *
 * @returns {string}
 */
function getHost(req) {
  var host = req.protocol + "://" + req.get('host');
  return host;
}

/**
 * Add routes to express app
 *
 * @param {object} apiRouter
 */
function addRoutes(apiRouter) {
  // Root, return a list of available links
  apiRouter.get('/', function onRequest(req, res, next) {
    var host = getHost(req);
    res.json({
      data: {},
      links: [
        {
          href: host + "/ui",
          rel: "ui",
          description: "UI for interacting with API",
          method: "GET",
          returns: [
            "text/html"
          ]
        }
      ]
    });
  });
}
exports.addRoutes = addRoutes;
