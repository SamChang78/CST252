/*
 * Author: Sam Chang <ychang@csumb.edu>
 * Created: Oct 26
 * License: Public Domain
 */

//
class Car {
  constructor(brand, model, year, colors, extras) {
    this.carname = brand;
    this.carmodel = model;
    this.caryear = year;
    this.carcolor = colors;
    this.carextras = extras;
  }
  info() {
    return "Brand: " + this.carname;
  }
}

class Car2 {
  constructor(brand, model, year, colors, extras) {
    this.carname = brand;
    this.carmodel = model;
    this.caryear = year;
    this.carcolor = colors;
    this.carextras = extras;
  }
  info() {
    return "Brand: " + this.carname;
  }
}

var mycar = new Car("Mazda, 3, 2015, silver, non");
var mycar2 = new Car2("BMW, e36, 1995, purple, shitbox");

document.getElementById("output").innerHTML += "<p>" + mycar.info() + "</p>";
document.getElementById("output").innerHTML += "<p>" + mycar2.info() + "</p>";