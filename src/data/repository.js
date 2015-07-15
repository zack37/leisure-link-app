var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo');

function Repository() { };

Repository.prototype.all = function(Model, cb) {
  Model.find({}, function(err, models) {
    if(err) console.error(err);
    cb(models);
  });
}

Repository.prototype.save = function(newModel, cb) {
  newModel.save(function(err) {
    if(err) console.log(err);
    cb(newModel);
  });
};

Repository.prototype.update = function(Model, id, updatedFields) {
  Model.update({_id: id}, updatedFields, function(err, affected) {
    if(err) console.error(err);
    console.log("rows affected", affected);
  })
};

Repository.prototype.delete = function(Model, id, cb) {
  Model.findOneAndRemove({_id: id, }, function() {
    cb();
  })
}

module.exports = Repository;
