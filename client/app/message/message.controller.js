'use strict';

angular.module('jamiiApp')
  .controller('MessageCtrl', function ($scope, $http) {

    $http.get('/api/messages').then(function (res) {
      $scope.messages = res.data;
    });

    $scope.sendMessage = function() {
      alert("Hey!");
    }

  });
