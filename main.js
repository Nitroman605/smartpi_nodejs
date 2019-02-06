var i2c = require('i2c');
var address = 0x38;
var wire = new i2c(address, {device: '/dev/i2c-1'});
wire.scan(function(err, data) {
    console.log(data)
  });