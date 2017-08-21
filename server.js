
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , relay = require('pecan-relay')
  , config = require('./config')
  , relay_schedule = require('relay-schedule');

relay.init(config.relay, function (r) {
  relay_schedule.initForRelay(r, function (state) {
    console.log("switching " + r.name + " to " + state + " at " + new Date());
    relay.set(r.id, state);
  })
});

//setTimeout(function () {
//    relay_schedule.init(config.schedule);
//   }, 5000);

var auth = require('http-auth');
//var basic = auth.basic({
//    realm: "PI",
//    file: __dirname + "/data/users.htpasswd" // gevorg:gpass, Sarah:testpass ...
//});

var app = express();

app.configure(function(){
//  app.use(auth.connect(basic));
  app.set('port', config.web.port);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.post('/relay', routes.relay);
app.get('/temp', routes.temp);

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

// comet
var io = require('socket.io').listen(server);

relay.on('set', function (data) {
  io.sockets.emit('set', data);
});
