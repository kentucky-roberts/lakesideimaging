var myApp = angular.module('myApp', ['ngRoute', 'firebase', 'appControllers']);

var appControllers = angular.module('appControllers', ['firebase']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'templates/home.html'
        }).
        when('/login', {
            templateUrl: 'templates/login.html',
            controller:  'RegistrationController'
        }).
        when('/register', {
            templateUrl: 'templates/register.html',
            controller:  'RegistrationController'
        }).
        when('/meetings', {
            templateUrl: 'templates/meetings.html',
            controller:  'MeetingsController'
        }).
        when('/about', {
            templateUrl: 'templates/about.html'
        }).
        when('/contact', {
            templateUrl: 'templates/contact.html'
        }).
        when('/sandbox', {
            templateUrl: 'templates/sandbox.html'
        }).
        otherwise({
            redirectTo: '/login'
        });
}]);