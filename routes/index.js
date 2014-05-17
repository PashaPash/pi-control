
/*
 * GET home page.
 */
var gpio = require('pi-gpio');

exports.index = function (req, res) {
  // gpio.open(1,"out", null);
  var relays = [
    { name: "lights 1", pin: 22, on: true },
    { name: "lights 2", pin: 11, on: true },
    { name: "CO2",      pin: 13, on: false },
    { name: "unused 4", pin: 15, on: false },
    { name: "unused 5", pin: 16, on: true },
    { name: "unused 6", pin: 18, on: false }
  ];
  res.render('index', { title: 'PI Home', relays: relays });
};