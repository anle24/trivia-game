var questions = require('../controllers/questions.js');
var scores = require('../controllers/scores.js');

module.exports = function(app){

  app.get('/questions', questions.index);
  app.post('/questions', questions.create);

  app.get('/score', scores.index);
  app.post('/score', scores.create);
}
