var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Score = mongoose.model('Score')

console.log('made it')
  module.exports = {
  index: function(req,res){
    Question.find({}, function(err, questions){
      if (err) {
        res.json(err);
      } else {
        res.json(questions);
      }
    })
  },

  create: function(req, res) {
    Question.create(req.body, function(err, question) {
      if (err) {
        res.json(err)
      } else {
        console.log('question created', question);
        res.json(question);
      }
    })
  }
}
