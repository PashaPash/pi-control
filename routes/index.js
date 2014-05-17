var relays = require('pecan-relay');
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
    res.send('ok');
  });
};
