'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'conectaCuatro',
  'tresEnRaya'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');
  //$locationProvider.html5Mode(true);

  $routeProvider
    .when('/tres-en-raya', { template: '<tres-en-raya></tres-en-raya>'})
    .when('/conecta-cuatro', { template: '<conecta-cuatro></conecta-cuatro>'})
    .otherwise({redirectTo: '/'});


}]);
