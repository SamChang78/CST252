/*
 * Author: Sam Chang <ychang@csumb.edu>
 * Created: 30 september
 * License: Public Domain
 */

 // Stuff

var outputEl = document.getElementById("output");

var new1El = document.createElement("p");

new1El.innerHTML = "710";

var new2El = document.createElement("pipe");

new2El.innerHTML = "420";

document.body.appendChild(new1El);

document.body.appendChild(new2El);

document.getElementById("output").appendChild(new1El);

document.getElementById("output").appendChild(new2El);