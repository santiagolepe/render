var User = require("../models/users");

module.exports = {

  login: function(req, res){
    var self = this;
    var email = req.body.email || "";
    var password = req.body.password || "";

    User.findOne({email: email, password: password}, function(err, usr){
      if(err){ return res.render('index', {error: err.message.err || err.message}); }
      if(usr){
        console.log(usr);
        req.session.usr = usr;
        return self.home(req, res);
      }
      res.render('index', {error: 'email o password incorrectos',
                           user: 'invitado',
                           nav: 'home'});

      //var user = new User({
        //first_name: 'Octavio',
        //last_name: 'Santiago',
        //email: 'octavio@crmzeus.com',
        //password: '12345678'
      //});
      //user.save(function(err){ if(err) console.log(err); });
    });
  },

  home: function(req, res){
    res.render('index', {
      user: req.session.usr?req.session.usr.first_name:'invitado',
      logged: req.session.usr?true:false,
      nav: 'home'
    });   
  },

  //logout, destroy the session and the session in mongo
  logout: function(req, res){
    req.session.destroy();
    res.render('index', {
      user: 'invitado',
      logged: false,
      nav: 'home'
    });   
  }
}
