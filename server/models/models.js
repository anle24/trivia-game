var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScoreSchema = new Schema({
  name: {type: String, required: true},
  score: {type: Number, default: 0},
  percentage: {type: Number, default: 0}
});

var QuestionSchema = new Schema({
  question: {type: String, required: true, minlength: [15, 'Question must be at least 15 characters long!']},
  answers: {type: Array, required: true, minlength: [3, 'Missing an answer!']}
});

var Score = mongoose.model('Score', ScoreSchema);
var Question = mongoose.model('Question', QuestionSchema);
