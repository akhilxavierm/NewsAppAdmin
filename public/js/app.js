var myModule=angular.module("myExpenseModule", [
  '720kb.datepicker','ngRoute'
]);

myModule.config(['$routeProvider','$locationProvider',
    function($routeProvider,$locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/home.html',
        controller: 'formFieldController'
      }).
      when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'aboutController'
      }).
      when('/careers', {
        templateUrl: 'templates/careers.html',
        controller: 'careersController'
      }).
      otherwise({
        redirectTo: '/'   
      });
     $locationProvider.html5Mode(true);

  }]);


