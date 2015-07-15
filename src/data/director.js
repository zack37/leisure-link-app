var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DirectorSchema = new Schema({
  name: String,
  age: { type: Number, min: 0, max: 125 },
  gender: { type: String, enum: ['M', 'F'] },
  moviesDirected: Array
});

var Director = mongoose.model('Director', DirectorSchema);

module.exports = Director;
