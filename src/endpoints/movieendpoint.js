var Repository = require('../data/repository');
var repo = new Repository();
var Movie = require('../data/movie');

module.exports = function(app) {
  app.get('/movies/all', function(req, res) {
    repo.all(Movie, function(movies) {
      res.json(movies);
    });
  });

  app.get('/movies/all/names', function(req, res) {
    repo.all(Movie, function(movies) {
      var movieNames = movies.map(function(m) {
        return m.name;
      });
      res.json(movieNames);
    });
  });

  app.post('/movies/create', function(req, res) {
    var newMovie = new Movie(req.body);
    repo.save(newMovie, function(director) {
      res.json(director);
    });
  });
};
