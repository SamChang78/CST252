/*
 * Author: Sam Chang <ychang@csumb.edu>
 * Created: Oct 29
 * License: Public Domain
 */

//
$("#output").append("<button id='mybutton'>Press Me!").bind('click', function() {
  alert('The button was clicked.')});

//change the color of the button
$("#mybutton").css("background-color", "green");
