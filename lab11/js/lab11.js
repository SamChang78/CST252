/*
 * Author: Sam Chang <ychang@csumb.edu>
 * Created: 08 Oct
 * License: Public Domain
 */

 // Return Gridffindor, Ravenclaw, Smoktherin, and Pufflepuff
 // depending on length mod 4
 function sortingHat(str) {
 	len = str.length;
 	mod = len % 4;
 	if (mod == 0) {
 	return "Gridffindor"
    }
    else if (mod == 1) {
 	return "Ravenclaw"
    }
    else if (mod == 2) {
 	return "Smoktherin"
    }
    else if (mod == 3) {
   	return "Pufflepuff"
    }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
	var name = document.getElementById("input").value;
	var house = sortingHat(name);
	nextText = "<p>The Sorting Hat has smoked you into " + house + "</p>";
	document.getElementById("output").innerHTML = nextText;
})