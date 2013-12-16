var home = require('../controllers/home');
var clients = require('../controllers/clients');

//MIDDLEWARE for authentication
var auth = function(req, res, next){
  if(!req.session.usr){
      return res.render('index', 
                        {error: 'No has iniciado session, logueate para continuar',
                         user: 'invitado',
                         nav: 'home' });
  }
  next();
}; 

module.exports = function(app){

  //home request
  app.get('/', home.home.bind(home));
  app.post('/logout', home.logout.bind(home));
  app.post('/', home.login.bind(home));

  app.get('/payments', function(req, res){
    res.render('payments/index');   
  });

  app.get('/clients', auth, function(req, res){
    res.render('clients/index', {
      user: req.session.usr.first_name,
      logged: true,
      nav: 'clients'
    });   
  });

  //clients RESTFUL
  app.get('/api/clients', clients.getAll.bind(clients));
  app.post('/api/clients', clients.add.bind(clients));

}
