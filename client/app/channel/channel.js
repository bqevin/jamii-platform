'use strict';

angular.module('jamiiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('channel', {
        url: '/channels',
        templateUrl: 'app/channel/channel.html',
        controller: 'ChannelCtrl',
        authenticate: true
      });
  });