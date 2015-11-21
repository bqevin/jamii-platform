'use strict';

angular.module('jamiiApp')
  .controller('ChannelDetailCtrl', function ($scope, $http, channelId) {
      $scope.channel = {};
      $scope.channel.members = [];
    $http.get('/api/channels/' + channelId).then(function (res) {
      $scope.channel = res.data;
    });
  });
