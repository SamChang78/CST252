/*
 * Author: Sam Chang <ychang@csumb.edu>
 * Created: 06 Oct
 * License: Public Domain
 */
 function sortUserName() {
	var input = document.getElementById('userName').value;
	var newel = document.createElement('p');
	var userName = input;
	//split string the array
	var nameArray = userName.split('');
	console.log("nameArray =", nameArray);
	//sort the array
	var nameArraySort = nameArray.sort();
	console.log("nameArraySort =", nameArraySort);
	//join array back to a string
	var nameSorted = nameArraySort.join('');
	console.log("nameSorted =", nameSorted);
	//puing sort value to new element
	newel.innerHTML = nameSorted;
	document.getElementById('output').innerHTML = newel.innerHTML;
}

var button = document.getElementById('my-button');
button.addEventListener('click', sortUserName);