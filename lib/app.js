/* eslint-env node */
// Customize this file with app routes and logic

// Include external dependencies

// Include local modules

function addRoutes(apiRouter) {
  // Root, return a list of available links
  apiRouter.get('/', function onRequest(req, res, next) {
    res.json({
      data: {},
      links: []
    });
  });
}
exports.addRoutes = addRoutes;
