//Doing some operation when all ajax call returns the value. Using ES6 promise, this is so easy to achieve.
function fetch(url) {
    var promise = new Promise(function(resolve, reject){

        //Javascript way to do an ajax call
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
                if (xmlhttp.status == 200) {
                    resolve(xmlhttp.responseText);
                }
                else if (xmlhttp.status == 400) {
                    reject(new Error('There was an error 400'));
                }
                else {
                    reject(new Error('something else other than 200 was returned'));
                }
            }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    });

    return promise;
}

var p1  = fetch("firstName.json");
var p2  = fetch("middleName.json");
var p3  = fetch("lastName.json");

Promise.all([p1 , p2, p3]).then(function(value){
    jsonValues = value.map( x => JSON.parse(x));
    console.log(jsonValues[0].firstName + ' ' + jsonValues[1].middleName + ' ' + jsonValues[2].lastName);
});
