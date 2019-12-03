/*
 * Author: Sam Chang <ychang@csumb.edu>
 * Created: 18 september
 * License: Public Domain
 */

 // Define Variables
myTransport = ["Mazda 3", " rides from friends"];

myMainRide = {
	make: "Mazda",
	model: "3",
	color: "Silver",
	year: 2015,
	ownIt: true,
};

 // Output 
 document.writeln("Kinds of transportion I use: " + myTransport + "<br>");
 document.writeln("myMainRide: <pre>",
 	JSON.stringify(myMainRide, null, '\t'), "</pre>");