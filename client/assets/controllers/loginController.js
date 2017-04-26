app.controller('loginController', function($scope, triviaFactory, $location) {
  $scope.user = "";

  $scope.login = function() {
    console.log('login button clicked!!', $scope.user)
    triviaFactory.login($scope.user, function(){
      $location.url('/');
    });
  }
})
