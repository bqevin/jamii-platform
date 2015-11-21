'use strict';

angular.module('jamiiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('message', {
        url: '/messages',
        templateUrl: 'app/message/message.html',
        controller: 'MessageCtrl',
        authenticate: true
      });
  });