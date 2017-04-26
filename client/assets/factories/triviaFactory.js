app.factory('triviaFactory', function($http) {
  var factory = {};
  factory.user = "";

  factory.login = function(name, callback) {
    factory.user = name;
    callback();
  }

  factory.getQuestions = function() {
    return $http.get('/questions').then(function(res) {
      return res.data;
    })
  };

  factory.createQuestion = function(newQuestion) {
    console.log('Factory received Question', newQuestion);
    return $http.post('/questions', newQuestion).then(function(res) {
      return res.data;
    })
  };

  factory.getScores = function() {
    console.log('getting scores -factory');
    return $http.get('/score').then(function(res) {
      return res.data;
    })
  };

  factory.createScore = function(newScore) {
    return $http.post('/score', newScore).then(function(res){
      return res.data;
    })
  };

  return factory;
})
