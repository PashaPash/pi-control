
/*
 * GET home page.
 */
var gpio = require('pi-gpio');

exports.index = function(req, res){
  // gpio.open(1,"out", null);
  res.render('index', { title: 'PI Home' });
};