var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActorSchema = new Schema({
  name: String,
  age: { type: Number, min: 0, max: 125 },
  gender: { type: String, enum: ['M', 'F'] },
  agent: String,
  moviesActedIn: Array
});

var Actor = mongoose.model('Actor', ActorSchema);

module.exports = Actor;
