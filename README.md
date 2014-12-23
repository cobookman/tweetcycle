tweetcycle
==========

Edison + hall effect sensor + leds + BLE = Bicycle which displays my incoming tweets


##Current Layout

When I've got a circuit board or more final layout I'll post an actual schematic.

Working list of components

| Component | Description |
|-----------|:-----------:|
| Generic LED | run of the mill LED used for debugging |
| [SS441R Hall Effect Sensor](http://www.mouser.com/ProductDetail/Honeywell/SS441R/?qs=HFYp5o5XvgJXLWeoEruO7A%3D%3D) | Unipolar hall effect sensor. Gives a Digital output of High if a magnet is near |
| 4.7kOhm Resistor | Used as a pullup for the SS441R.  (Note this is lower than the speced 10Kohm resistor.  I found it to work better given the low Vin value of 3.3V |
| 10KOhm Resistor | For the debugging Led.  Its what I had :D |
| Intel Edison | For its ble and wifi stack being much more stable than any microcontroller i've played with |

