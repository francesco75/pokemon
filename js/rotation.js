(function () {
    'use strict';

    angular
        .module('myApp',['ngRoute'])
        .config(config)
        

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);  // Enable hashed //
        $routeProvider
           .when('/start', {
              
             templateUrl: 'templates/start.html',
           
         })
           .when('/normal', {
              
             templateUrl: 'templates/normal.html',
           
         })
        .when('/poison', {    

            templateUrl : 'templates/poison.html',
        
        })
        .when('/evolution', {    

            templateUrl : 'templates/evolution.html'
        
        })
}})();