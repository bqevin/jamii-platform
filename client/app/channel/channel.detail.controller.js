'use strict';

angular.module('jamiiApp')
  .controller('ChannelDetailCtrl', function ($scope, $http, channelId) {

    $http.get('/api/channels/' + channelId).then(function (res) {
      $scope.channel = res.data;
      $scope.command = $scope.channel.name;
    });
    
    $scope.sendMessageToChannel = function() {
      $http.post('/api/commands', { Body: $scope.command, From: "+0000000000" }).then(function(res) {
        console.log('sent');
      });
    };
    
  });
