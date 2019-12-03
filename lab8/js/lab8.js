/*
 * Author: Sam Chang <ychang@csumb.edu>
 * Created: 26 september
 * License: Public Domain
 */

 // Funtion Names
function firstThing() {
    console.log(test + ":This is the first thing.<br>")

};

function secondThing() {
    console.log(test + ":This is the second thing.<br>")

};

function thirdThing() { 
    console.log(test + ":This is the third thing.<br>")
};

//test 1 
function firstThing(test) {
    console.log(test + ":This is the first thing.<br>")
};

function secondThing(test) {
    console.log(test + ":This is the second thing.<br>")
};

function thirdThing(test) {
    console.log(test + ":This is the third thing.<br>")
};

firstThing("test 1");
secondThing("test 1");
thirdThing("test 1");

//test 2 - in order
setTimeout(function(){
    firstThing("test 2");
}, 0);
setTimeout(function(){
    secondThing("test 2");
}, 0);
setTimeout(function(){
    thirdThing("test 2");
}, 0);

//test 3 - order is 2, 3, 1.
setTimeout(function(){
    firstThing("test 2");
}, 3000);
setTimeout(function(){
    secondThing("test 2");
}, 1000);
setTimeout(function(){
    thirdThing("test 2");
}, 2000);
