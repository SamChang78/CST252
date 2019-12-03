/*
 * Author: Sam Chang <ychang@csumb.edu>
 * Created: Oct 21
 * License: Public Domain
 */

 // 
 function Vehicle(make, model, year, color, extras) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.colors = color;
  this.extras = extras;

  this.info = function() {
  	return (
    "I've owned a" + " " + this.make + " " + this.model + " " + this.year + " " + this.colors + " " + this.extras);
  }
  }

var lilsilver = new Vehicle("Mazda", "3", "2015", "silver", "non");
var shitbox = new Vehicle("BMW", "E36", "1995", "purple", "shitbox");

document.getElementById("output").innerHTML += "<p>" + lilsilver.info() + "</p>";
document.getElementById("output").innerHTML += "<p>" + shitbox.info() + "</p>";