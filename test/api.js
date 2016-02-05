/* eslint-env node, mocha */

// Include external dependencies
var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');

// Include local modules
var app = require('../lib/www');

// Setup
chai.config.includeStack = true;
chai.use(chaiHttp);

describe('Connectivity', function connectivitySuite() {
  it("should return 200 on / GET", function testGetRoot(done) {
    chai.request(app)
      .get('/')
      .end(function onEnd(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
});
