
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

function findRelay(pin)
{
  for (var i in relays) {
    if (relays[i].pin == pin) {
      return relays[i]  ;
    }
  }
  throw 'Invalid pin: ' + pin;;
}

exports.relay = function (req, res) {
  var pin = parseInt(req.param("pin"));
  var state = req.param("state") == 'on' ? 1 : 0;

  var relay = findRelay(pin);
  console.log(relay.on);

  gpio.open(pin, "output", function () {
    gpio.write(pin, state, function () {
      relay.on = state == 1;
    });
  });
};
