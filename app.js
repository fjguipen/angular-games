'use strict';

// Declare app level module which depends on views, and core components
angular.module('gamesApp', [
  'ngRoute',
  'home',
  'tresEnRaya',
  'conectaCuatro',
])

.config(['$routeProvider', function( $routeProvider) {


  $routeProvider
    .when('/tres-en-raya', { template: '<tres-en-raya></tres-en-raya>'})
    .when('/conecta-cuatro', { template: '<conecta-cuatro></conecta-cuatro>'})
    .otherwise({redirectTo: '/'});


}]);
