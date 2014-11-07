(function(){
  'use strict';
  angular.module('nv-portfolio', ['ngRoute', 'ngAnimate'])
  .config(['$routeProvider', function($routeProvider, $animateProvider){
    $routeProvider
    .when('/', {templateUrl:'./home.html', controller:'HomeCtrl'})
    .otherwise({redirectTo:'/'});
  }]);
})();
