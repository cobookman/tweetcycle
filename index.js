var PINS = require('./config/pins');
var Hall = require('./lib/hall');

function App() {
  this.hall = new Hall(PINS.GP14);
}

App.prototype.main = function() {
  while(true) {
    if(this.hall.haveRotated()) {
      console.log("wheel rotation");
      this.hall.calcRPM();
    }
  }
};


var app = new App();
app.main();

