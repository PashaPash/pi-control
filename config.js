var config = {};

config.relay = [
   {
     name: 'R1',
    //  on: [10, 00],
    //  off: [10, 05]
   },
   {
     name: 'Air Pump',
     on: [4, 00],
     off: [13, 30]
   },
   {
     name: 'Main Light',
     on: [13, 30],
     off: [23, 10]
   },
   {
     name: 'Led Light',
     on: [13, 30],
     off: [23, 00]
   },
   {
     name: 'CO2',
     on: [10, 00],
     off: [21, 00]
   },
   {
     name: 'R6',
    //  on: [10, 00],
    //  off: [10, 05]
   },
];

config.web = {
  port: process.env.PORT || 3000
}

module.exports = config;
