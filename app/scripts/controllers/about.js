'use strict';

/**
 * @ngdoc function
 * @name newTestAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newTestAppApp
 */
angular.module('newTestAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
