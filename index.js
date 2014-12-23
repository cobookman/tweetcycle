var PINS = require('./config/pins');
var Hall = require('./lib/hall');

var app = new App();
app.main();


function App() {
  this.hall = new Hall(PINS.GP14);
}

App.prototype.main = function() {
  setInterval(function() {
    if(this.hall.haveRotated()) {
      this.hall.calcRPM();
    }
    console.log("RPM is: ", this.hall.rpm);
  }, 100);
};

