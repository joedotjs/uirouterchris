var app = angular.module('myApp', ['ui.router']);

app.controller('MainCtrl', function ($scope) {
    $scope.message = 'Home page!';
});

app.controller('AboutCtrl', function ($scope) {
    $scope.message = 'My name is Joe.';
});

app.config(function ($urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

});

app.config(function ($stateProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
    });

    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    });

    $stateProvider.state('about.name', {
        url: '/name',
        template: '<h1>Joe!</h1>'
    });

    $stateProvider.state('about.location', {
        url: '/where',
        template: '<h1>NYC!</h1>'
    });
    $stateProvider.state('about.occupation', {
        url: '/job',
        template: '<h1>Teacher!</h1>'
    });

});