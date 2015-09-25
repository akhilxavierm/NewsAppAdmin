var myModule=angular.module("myExpenseModule", [
  '720kb.datepicker','ngRoute','seo'
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

myModule.factory("smartBannerFactory", function() {
    return {
        appId: "",
        appArgument: ""
    }    
});
myModule.directive("smartBanner",function(smartBannerFactory){
    return {
        restrict: "A",
        template: '<meta name="apple-itunes-app" content="app-id={{smartbanner.appId}}, app-argument = {{smartbanner.appArgument}}"></meta>',
        replace: true,
        link: function(scope) {
            scope.smartbanner = smartBannerFactory;
        }
    } 

});
