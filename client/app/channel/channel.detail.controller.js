'use strict';

angular.module('jamiiApp')
  .controller('ChannelDetailCtrl', function ($scope, $http, channelId) {

    $http.get('/api/channels/' + channelId).then(function (res) {
      $scope.channel = res.data;
      $scope.command = $scope.channel.name;

      $http.get('/api/messages/?channel_name=' + $scope.channel.name).then(function(res) {
        $scope.messages = res.data;
      });
    });

    $scope.sendMessageToChannel = function() {
      $http.post('/api/commands', { raw: $scope.command }).then(function(res) {
        console.log('sent');
      });
    };

  });
