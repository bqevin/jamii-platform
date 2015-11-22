'use strict';

angular.module('jamiiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('command', {
        url: '/commands',
        templateUrl: 'app/command/command.html',
        controller: 'CommandCtrl',
        authenticate: true
      });
  });