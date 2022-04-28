var config = {};

config.relay = [
   {
     name: 'Main Light',
     on: [13, 30],
     off: [23, 10]
   },
   {
     name: 'Air Pump',
     on: [4, 00],
     off: [13, 30]
   },
   {
     name: 'BAD1',
     on: [11, 00],
     off: [19, 00]
   },
   {
     name: 'BAD2',
     on: [7, 0],
     off: [7, 1]
   },
   {
     name: 'CO2',
     on: [10, 00],
     off: [18, 00]
   },
   {
     name: 'LED Light',
     on: [13, 30],
     off: [23, 00]
   },
];

config.web = {
  port: process.env.PORT || 3000
}

module.exports = config;
