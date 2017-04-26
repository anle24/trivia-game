app.controller('triviaController', function($scope, triviaFactory, $location, $routeParams) {
  console.log('triviaController loaded!');
  if(triviaFactory.user == "") {
    $location.url('/index');
  } else {
    $scope.user = triviaFactory.user;
    $scope.questions = [];
    $scope.answers = [];

    function shuffle(a) {
      var j, x, i;
      for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
      }
    }

    var getThreeQuestions = function(data) {
      triviaFactory.getQuestions().then(function(data) {
        console.log(data);
        shuffle(data);
        for (var i = 0; i < 3; i++) {
          $scope.questions.push(data[i]);
          console.log('questions: ', $scope.questions);
        }
        for (var i = 0; i < $scope.questions.length; i++) {
          console.log('Logging each question', $scope.questions[i]);
          shuffle($scope.questions[i].answers);
        }
      })
    }

    getThreeQuestions();

    $scope.create = function() {
      var newScore = {};
      angular.forEach($scope.questions, function(question){
        $scope.answers.push(question.value);
      })
      newScore.name = $scope.user;
      var score = 0;
      console.log('submitted answers', $scope.answers);
      for (var i = 0; i < $scope.answers.length; i++){
        console.log('answer is:', $scope.answers[i]);
        if ($scope.answers[i] > 1) {
          score ++;
          console.log('increasing score', score);
        }
      }
      newScore.score = score;
      console.log('Score: ', newScore.score);
      newScore.percentage = (newScore.score / 3) * 100;
      console.log(newScore);
      triviaFactory.createScore(newScore).then(function(data) {
        $scope.answers = {};
        newScore = {};
        $location.url('/');
      })
    }
  }
})
