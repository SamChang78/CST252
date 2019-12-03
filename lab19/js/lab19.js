/*
 * Author: Sam Chang <ychang@csumb.edu>
 * Created: Oct 29
 * License: Public Domain
 */

// attach click action to button
$("#action").click(function(){
    // get data via ajax from numbersapi
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (ENDPOINT)
        url: "https://api.chucknorris.io/jokes/random",
        // The data to send (will be converted to a query string)
        // data: { id: 123},
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        // dataType : "json",
    })
    // If the request succeeds
    .done(function(data) {
        console.log(data);
      // put data in webpage
        $('#output').html(data.value);
    })
    console.log("Let's Blaze!")
});