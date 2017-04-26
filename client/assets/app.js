var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/dashboard.html',
    controller: 'dashboardController'
  })
  .when('/index', {
    templateUrl: 'partials/login.html',
    controller: 'loginController'
  })
  .when('/new_question', {
    templateUrl: 'partials/question.html',
    controller: 'questionController'
  })
  .when('/lets_play', {
    templateUrl: 'partials/trivia.html',
    controller: 'triviaController'
  })
  .otherwise({
    redirect: '/'
  });
});
