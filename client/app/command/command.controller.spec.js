'use strict';

describe('Controller: CommandCtrl', function () {

  // load the controller's module
  beforeEach(module('jamiiApp'));

  var CommandCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CommandCtrl = $controller('CommandCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
