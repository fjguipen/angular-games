'use strict';

angular.module('home', [
  'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', [function() {

}]);