// day3
// Question No 2
// Use the rest countries API url and display all the country flags from in the console


// create a XMLHttpRequest

var Flagreq = new XMLHttpRequest();

Flagreq.timeout = 25000;//was getting timeout error, couldnt figure it out!!
Flagreq.open("GET", "https://restcountries.com/v3.1/all");
Flagreq.addEventListener('load', function () {
    var responseData = JSON.parse(Flagreq.responseText);
    var flags = responseData.map(function (country) {
        return country.flags
    });

    console.log("flags:", flags);

});

Flagreq.send(); 