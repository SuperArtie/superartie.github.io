(function(){
  'use strict';
  angular.module('nv-portfolio', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'./home.html', controller:'HomeCtrl'})
    .otherwise({redirectTo:'/'});
  }]);
})();
