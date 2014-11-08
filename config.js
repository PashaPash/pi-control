var config = {};

config.relay = [
   {
     name: 'LED Light',
     on: [13, 30],
     off: [23, 10]
   },
   {
     name: 'Front Light',
     on: [13, 30],
     off: [22, 30]
   },
   {
     name: 'Back Light',
     on: [14, 00],
     off: [23, 00]
   },
   {
     name: 'Compact Light',
     on: [13, 30],
     off: [23, 10]
   },
   {
     name: 'CO2',
     on: [10, 00],
     off: [22, 00]
   }
];

config.web = {
  port: process.env.PORT || 3000
}

module.exports = config;
