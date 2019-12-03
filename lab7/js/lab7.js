/*
 * Author: Sam Chang <ychang@csumb.edu>
 * Created: 24 september
 * License: Public Domain
 */

 // sortUserName
function sortUserName() {
    var userName = window.prompt("Ya'll, please, I beg you tell me your name so I can laught at it.")
    console.log("userName =", userName);
    //split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort=", nameArraySort);
    //join array back to a string
    var nameSorted = nameArraySort.join('')
    console.log("nameSorted", nameSorted);

    return nameSorted;
}

 // Output 
 document.writeln("Oh hey your name is absolutely funny!",
 	sortUserName(), "</br>");