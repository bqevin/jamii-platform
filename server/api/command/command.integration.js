'use strict';

var app = require('../..');
var request = require('supertest');

describe('Command API:', function() {

  describe('GET /api/commands', function() {
    var commands;

    beforeEach(function(done) {
      request(app)
        .get('/api/commands')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          commands = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      commands.should.be.instanceOf(Array);
    });

  });

});
