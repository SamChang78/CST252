// /*
//  * Author: Sam Chang <ychang@csumb.edu>
//  * Created: Nov 20
//  * License: Public Domain
// /*
// action for the button
$("#action").click(function(){
    // console.log("Button pressed");
    // go to api get data / tacos$
        $.ajax({
        // The URL for the request (ENDPOINT)
        url: "https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json",
        // The data to send (will be converted to a query string)
        // data: { id: 123},
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        // dataType : "json",
    })
   
    // If the request succeeds
    // data= comicObj variable
   
        .done(function(data) {
        // jQuery returns us the data as an object not a JSON string
        console.log(data);
        // print title
        console.log(data.name);
        // put data in webpage
        $("#output").append("<h1>" + data.alt);
        $("#output").append("<p>" + data.title);
        $("#output").append(`<img src="${data.img}" alt="${data.alt}">`);
    });
    // output to webpage
    // $(".output").html(something here);
});



