var Repository = require('../data/repository');
var repo = new Repository();
var Actor = require('../data/actor');

module.exports = function(app) {
  app.get('/actors/all', function(req, res) {
    repo.all(Actor, function(actors) {
      res.json(actors);
    });
  });

  app.get('/actors/all/names', function(req, res) {
    repo.all(Actor, function(actors) {
      var actorNames = actors.map(function(a) { return a.name });
      res.json(actorNames);
    });
  });

  app.post('/actors/create', function(req, res) {
    var newActor = new Actor(req.body);
    repo.save(newActor, function(actor) {
      res.json(newActor);
    });
  });

  app.post('/actors/edit', function(req, res) {
    var actor = req.body;
    var fields = {name: actor.name, age: actor.age, gender: actor.gender, agency: actor.agency, moviesActedIn: actor.moviesActedIn};
    repo.update(Actor, actor._id, fields)
    repo.all(Actor, function(actors) {
      res.json(actors);
    });
  });

  app.post('/actors/delete', function(req, res) {
    repo.delete(Actor, req.body.id, function() {
      repo.all(Actor, function(actors) {
        res.json(actors);
      })
    });
  });
};
