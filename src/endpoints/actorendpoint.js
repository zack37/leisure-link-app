var Repository = require('../data/repository');
var repo = new Repository();
var Actor = require('../data/actor');

module.exports = function(app) {
  app.get('/actors/all', function(req, res) {
    var actor = {
      name: 'Jim Carrey',
      age: '53',
      gender: 'M',
      agent: 'Actors United'
    };

    repo.all(Actor, function(actors) {
      res.json([actor].concat(actors));
    });
  });

  app.post('/actors/create', function(req, res) {
    var newActor = new Actor(req.body);
    repo.create(newActor);
    res.status(200).end();
  })

  app.post('/actors/edit', function(req, res) {
    var Actor = new Actor(req.body);
    repo.
  });
};
