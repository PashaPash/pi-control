var config = {};

config.relay = [
   {
     name: 'Spot Light',
     on: [10, 00],
     off: [20, 00]
   },
   {
     name: 'Air Pump',
     on: [6, 00],
     off: [13, 30]
   },
   {
     name: 'Main Light',
     on: [13, 30],
     off: [23, 10]
   },
   {
     name: 'Front Light',
     on: [13, 30],
     off: [23, 00]
   },
   {
     name: 'CO2',
     on: [10, 00],
     off: [22, 00]
   },
   {
     name: 'Back Light',
     on: [13, 30],
     off: [23, 00]
   },
];

config.web = {
  port: process.env.PORT || 3000
}

module.exports = config;
