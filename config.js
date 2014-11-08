var config = {};

config.relay = [
   {
     name: 'LED Light'
   },
   {
     name: 'Front Light'
   },
   {
     name: 'Back Light'
   },
   {
     name: 'Compact Light'
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
