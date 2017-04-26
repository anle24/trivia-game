app.controller('dashboardController', function($scope, triviaFactory, $location, $routeParams) {
  if (triviaFactory.user == "") {
    $location.url('/index');
  } else {
    $scope.user = triviaFactory.user;
    $scope.scores = [];

    triviaFactory.getScores().then(function(data) {
      if(data.err) {
        console.log(data.err);
      } else {
        $scope.scores = data;
      }
    })
  }
})
