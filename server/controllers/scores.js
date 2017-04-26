var mongoose = require('mongoose');
var Score = mongoose.model('Score');
var Question = mongoose.model('Question');

module.exports = {
  index: function(req, res){
    Score.find({}, function(err, scores){
      res.json(scores);
    })
  },

  create: function(req, res){
    console.log('trying to create score');
    Score.create(req.body, function(err, score){
      if(err){
        res.json(err);
      } else {
        console.log('score created!!');
        res.json(score);
      }
    })
  }
}
