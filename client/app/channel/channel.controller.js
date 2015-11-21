'use strict';

angular.module('jamiiApp')
  .controller('ChannelCtrl', function ($scope, $http) {
    $http.get('/api/channels').then(function (res) {
      $scope.channels = res.data;
    });

    $scope.createChannel = function () {
      $http.post('/api/channels', $scope.channel.name).then(function (res) {
        $scope.channels.push(res);
      });
    }
  });
