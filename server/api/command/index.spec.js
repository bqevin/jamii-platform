'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var commandCtrlStub = {
  index: 'commandCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var commandIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './command.controller': commandCtrlStub
});

describe('Command API Router:', function() {

  it('should return an express router instance', function() {
    commandIndex.should.equal(routerStub);
  });

  describe('GET /api/commands', function() {

    it('should route to command.controller.index', function() {
      routerStub.get
        .withArgs('/', 'commandCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
