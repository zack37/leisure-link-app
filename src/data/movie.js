var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
  name: String,
  description: String,
  yearReleased: { type: Number, min: 1800, max: new Date().getFullYear() },
  rating: { type: Number, min: 1, max: 10 },
  actors: Array,
  directors: Array
});

var Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
