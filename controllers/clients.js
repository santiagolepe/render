var Client = require("../models/clients");

module.exports = {

  getAll: function(req, res){
    Client.find({}, function(err, clients){
      if(err){ return res.send(400, err); }
      res.send(200, clients);
    });
  },

  add: function(req, res){
    var data = req.body; 
    var client = new Client({
      first_name: data.firstName,
      last_name: data.lastName
    });

    client.save(function(err){
      if(err) return res.send(400, err);
      res.send(200, "success");
    });
  },
}
