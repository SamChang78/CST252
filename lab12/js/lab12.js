/*
 * Author: Sam Chang <ychang@csumb.edu>
 * Created: 12 Oct
 * License: Public Domain
 */

 maxFactors = 4;

 outputEl = document.getElementById("output");

 // get the values from lab12 webpage and write the values in an object
 // there are ids num0, text0, num1, text1, num2, text2, num3, text3.
 // return an object that runs as below:
 //     {3: "Fizz", 5: "Buzz", 7: "Boom"}
 function getFactorObj() {
    var factorObj = {};
    for (var factor=0; factor<maxFactors; factor++) {
        numId = "num" + factor;
        textId = "text" + factor;
        numValue = document.getElementById(numId).value;
        textValue = document.getElementById(textId).value;
        console.log(factor + ") num:", numValue, "text:", textValue)
        //
        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
 } 

 function outputToPage(str) {
    newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
 }

 //  Lab 12 requires a number and an object resembles bolow:
 //     {3: "Fizz", 5: "Buzz", 7: "Boom"}
 //  So Lab12 asks to loop over the numbers and outputs the number and the matching text
 // for factors
 function fizzBuzzBoom(maxNums, factorObj) {
    // apply to all of out numbers
    for (var num=0; num<maxNums; num++) {
        //reset the output string
        var outputStr = "";
        //use the factors gathered from lab12 index.html
        for(var factor in factorObj) {
            // checks the num if is a multiple of factor
            if (num % factor == 0) {
                //if so, add the text to output string
                outputStr += factorObj[factor];
            }
        }
        //  now if there's a word in outputStr, turn it to " - FizzBuzz!"
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
    }
 }

var button = document.getElementById('submit');
button.addEventListener('click', function(){
    var max = document.getElementById('max').value;
        var functionObj = getFactorObj();

    if (!max ){
        outputEl.innerHTML = "ERROR";
        return;
    }
    // outputEl.innerHTML = "";
    fizzBuzzBoom(max, functionObj);
})

































