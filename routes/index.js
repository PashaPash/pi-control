var relays = require('pecan-relay');
var therm = require('ds18b20')

/*
 * GET home page.
 */
exports.index = function (req, res) {
  res.render('index', { title: 'PI Home', relays: relays.list() });
};

exports.relay = function (req, res) {
  var pin = parseInt(req.param("pin"));
  var state = req.param("state") == 'on';

  relays.set(pin, state, function () {
    res.end('ok');
  });
};

exports.temp = function (req, res) {
  therm.sensors(function (err, ids) {
    if (!!err) {
      console.log(err);
      res.statusCode = 500;
      res.end(err.toString());
    }
    else if (ids.length > 0) {
      var sensorId = ids[0].trim(); // windows \r trim
      therm.temperature(sensorId, function (err, value) {
        if (!!err) {
          console.log(err);
          res.statusCode = 500;
          res.end(err.toString());
        }
        else {
          res.end(value.toString());
        }
      });
    }
    else {
      res.end("--.--");
    }
  });
};