var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
      
      .when('/',
      {
        templateUrl: "templates/home.html",
        controller: "AppCtrl"
      })
      
      .when('/about',
      {
        templateUrl: "templates/about.html",
        controller: "AppCtrl"
      })
      
      .when('/contact',
      {
        templateUrl: "templates/contact.html",
        controller: "AppCtrl"
      })
      
      .when('/sandbox', 
      {
        templateUrl: "templates/sandbox.html"
      })

      .otherwise({
        template: "This doesn't exist!"
      })
});

app.controller("AppCtrl", function($scope) {

    $scope.model = {
        message: "This is my app!!!"
    }
});