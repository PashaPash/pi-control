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
    id: 1,
    on: { hour: 18, minute: 45 },
    off: { hour: 18, minute: 46 }
  },
  {
    id: 2,
    on: { hour: 18, minute: 47 },
    off: { hour: 18, minute: 48 }
  }
];

config.web = {
  port: process.env.PORT || 3000
}

module.exports = config;
