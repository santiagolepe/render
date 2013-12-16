var express = require('express');
var http = require('http');
var path = require('path');
var MongoStore = require('connect-mongo')(express);
var config = require('./config/global');

var app = express();

// all environments
app.set('port', process.env.PORT || config.app.port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.session({
  secret: 'render node',
  store: new MongoStore({
    host: config.db.host,
    db: config.db.name
  })
}));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//initialize route manager
require('./routes/index')(app);

require('./services/mongoose').init(function(error){
  if(error){ throw new Error('Error: ', error); }
  console.log('Mongoose Initialized !');

  http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });
});

