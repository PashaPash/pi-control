var config = {};

config.relay = {
  count: 5,
  names: [
    'LED Light',
    'Back Light',
    'Front Light',
    'Compact Light',
    'CO2'
  ]
};

config.schedule = [
  {
    id: 5,
    on: { hour: 10, minute: 00 },
    off: { hour: 22, minute: 00 }
  }
];

config.web = {
  port: process.env.PORT || 3000
}

module.exports = config;
