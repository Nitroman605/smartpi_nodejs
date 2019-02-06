const raspi = require('raspi');
const I2C = require('raspi-i2c').I2C;
var address = 0x38;
raspi.init(() => {
    const i2c = new I2C();
    console.log(i2c.readSync(address,0x0C,3)); // Read one byte from the device at address 18
  });