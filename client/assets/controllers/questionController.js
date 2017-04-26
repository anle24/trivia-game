app.controller('questionController', function($scope, triviaFactory, $location, $routeParams) {
  console.log('question controller loaded');
  if (triviaFactory.user == "") {
    $location.url('/index');
  } else {
    $scope.user = triviaFactory.user;
    $scope.errors = [];

    $scope.create = function() {
      var newQuestion = {};
      var answers = [];
      if ($scope.submitQuestion.answerOne < 1 || $scope.submitQuestion.answerTwo < 1 || $scope.submitQuestion.answerThree < 1) {
        $scope.errors.push("Cannot leave an answer empty!");
      } else {
        console.log('trying to submit question..');
        newQuestion.question = $scope.submitQuestion.question;
        answers.push(
          {answer: $scope.submitQuestion.answerOne, value: 2},
          {answer: $scope.submitQuestion.answerTwo, value: 1},
          {answer: $scope.submitQuestion.answerThree, value: 0});
        newQuestion.answers = answers;
        console.log('here are the answer objects', answers);
        console.log('this is the newQuestion object', newQuestion);
        triviaFactory.createQuestion(newQuestion).then(function(data) {
          if (data.err) {
            $scope.errors.push(data.err);
          } else {
            $location.url('/');
          }
        })
      }
    }
  }
})
