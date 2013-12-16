var homeController = require('../controllers/home');

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
  app.get('/', homeController.home.bind(homeController));
  app.post('/logout', homeController.logout.bind(homeController));
  app.post('/', homeController.login.bind(homeController));

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

}
