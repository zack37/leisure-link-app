var Repository = require('../data/repository');
var repo = new Repository;
var Director = require('../data/director')

module.exports = function(app) {
  app.get('/directors/all', function(req, res) {
    repo.all(Director, function(directors) {
      res.json(directors);
    });
  });

  app.get('/directors/all/names', function(req, res) {
    repo.all(Director, function(directors) {
      var directorNames = directors.map(function(d) { return d.name });
      res.json(directorNames);
    });
  });

  app.post('/directors/create', function(req, res) {
    var newDirector = new Director(req.body);
    repo.save(newDirector, function(director) {
      res.json(director);
    });
  })
};
