module.exports = function(app){

  app.get('/', function(req, res){
    res.render('index');   
  });

  app.get('/payments', function(req, res){
    res.render('payments/index');   
  });

}
