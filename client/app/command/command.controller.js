'use strict';

angular.module('jamiiApp')
  .controller('CommandCtrl', function ($scope, $http) {

    $http.get('/api/commands').then(function (res) {
      $scope.commands = res.data;
    });

    $scope.sendCommand = function() {
      $http.post('/api/commands', { raw: $scope.command }).then(
        function(res) {
          console.dir(res);
        }
      );
    }
  });
