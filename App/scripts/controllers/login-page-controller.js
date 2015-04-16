'use strict';

/**
 * @ngdoc function
 * @name stocksApp.controller:PageLoginCtrl
 * @description
 * # PageLoginCtrl
 * Controller of the stocksApp
 */

App.controller('login-page-controller',['$scope', 'Auth', function($scope, Auth)
{
    $scope.auth = Auth;
}])