'use strict';

/**
 * @ngdoc function
 * @name newTestAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newTestAppApp
 */
angular.module('newTestAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
