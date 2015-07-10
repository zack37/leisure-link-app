var Repository = require('../data/repository');
var repo = new Repository();
var Movie = require('../data/movie');

module.exports = function(app) {
  app.get('/movies/all', function(req, res) {
    repo.all(Movie, function(movies) {
      res.json(movies);
    });
  });

  app.post('/movies/create', function(req, res) {
    console.log('Creating movie', req.body);
    var newMovie = new Movie(req.body);
    repo.save(newMovie);
    res.status(200).end();
  });
};
