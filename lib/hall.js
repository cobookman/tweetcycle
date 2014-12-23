var m = require('mraa');

function Hall(pin) {
  this.digitalIn = new m.Gpio(pin);
  this.digitalIn.dir(m.DIR_IN);

  this.rpm = null;
  this.lastVal = null;
  this.lastRotation = Date.now();
}

Hall.prototype.haveRotated = function() {
  var curVal = this.digitalIn.read();
  if (this.lastVal === curVal) {
    return false;
  }
  else {
    this.lastVal = curVal;
    return true;
  }
};

Hall.prototype.calcRPM = function() {
  var now = Date.now(); // current time in ms
  var minsElapsed = (now - this.lastRotation)/60000; //60000ms in min
  this.rpm = 1 / minsElapsed;
  console.log(this.rpm);
  this.lastRotation = now;
  return this.rpm;
};

module.exports = Hall;
