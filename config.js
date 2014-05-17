var config = {};

config.relay = {
  count: 3,
  names: [
    'Light 1',
    'Light 2',
    'CO2']
};

config.web = {
  port: process.env.PORT || 3000
}

module.exports = config;