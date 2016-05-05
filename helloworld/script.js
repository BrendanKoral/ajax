/**
 * Created by Koral on 5/4/2016.
 */

//This is a standard request below, but need other code to make sure it's reverse compatible
//var request = new XMLHttpRequest();

//Reverse compatibility request

var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft,XMLHTTP");
}


//request.open('GET', 'data.txt', false);

//False makes this a synchronous request, which is generally a bad idea. Instead, remove it to default to true


request.open('GET', 'data.txt');

//Check ready state of page. If 4 and status is 200, write data into page

request.onreadystatechange = function () {
    if ((request.readyState===4) && (request.status===200)) {
        document.writeln(request.responseText);
    }
};


request.send();

//Send request to server


console.log(request);

//Send data to console so I can make sure it's working



//Write data from request to the page