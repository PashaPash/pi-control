
/*
 * GET home page.
 */
var gpio = require('pi-gpio');

var relays = [
  { name: "lights 1", pin: 22 },
  { name: "lights 2", pin: 11 },
  { name: "CO2",      pin: 13 },
  { name: "unused 4", pin: 15 },
  { name: "unused 5", pin: 16 },
  { name: "unused 6", pin: 18 }
];


exports.index = function (req, res) {
  res.render('index', { title: 'PI Home', relays: relays });
};

function isValidPin(pin)
{
  for (var i in relays) {
    if (relays[i].pin == pin) {
      return true;
    }
  }
  return false;
}

exports.relay = function (req, res) {
  var pin = parseInt(req.param("pin"));
  var state = req.param("state") == 'on' ? 1 : 0;

  if (isValidPin(pin)) {
    gpio.open(pin, "output", function (err) {
      gpio.write(pin, state, function () {
//        gpio.close(pin);
      });
    });

    res.send(pin + ' set to ' + state);
  }
  else {
    throw 'Invalid pin: ' + pin;
  }
};
