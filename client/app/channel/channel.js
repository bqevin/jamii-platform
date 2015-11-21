'use strict';

angular.module('jamiiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('channel', {
        url: '/channels',
        templateUrl: 'app/channel/channel.html',
        controller: 'ChannelCtrl',
        authenticate: true
      })
      .state('channelDetail', {
        url: '/detail/{channelId}',
        templateUrl: 'app/channel/channel.detail.html',
        controller: 'ChannelDetailCtrl',
        authenticate: true,
        resolve: {
          channelId: ['$stateParams', function ($stateParams) {
            return $stateParams.channelId;
          }]
        } 
      });
  });