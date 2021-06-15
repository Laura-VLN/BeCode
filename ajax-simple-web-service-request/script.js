
let xhr = new XMLHttpRequest; //Create the XHR Object
xhr.open('GET', 'https://thatsthespir.it/api', true) //Call the open function, GET-type of request, url, true-asynchronous

xhr.onload = function() { //call the onload 

        if (xhr.status === 200) { //check if the status is 200(means everything is okay)
            //return server response as an object with JSON.parse
            let result = JSON.parse(xhr.responseText);
            document.getElementById("quote").innerHTML = result.quote;
        }
        else {
            document.getElementById("quote").innerHTML = "Error ! Please try to reload the page."
        }
}
        
xhr.send(); //call send

//Common Types of HTTP Statuses
// 200: OK
// 404: ERROR
// 403: FORBIDDEN