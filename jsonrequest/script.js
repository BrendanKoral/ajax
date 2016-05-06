/**
 * Created by Koral on 5/4/2016.
 */
/**
 * Created by Koral on 5/4/2016.
 */


var mybutton = document.getElementById('loadbutton');
mybutton.onclick = loadAJAX;

function loadAJAX() {

var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'data.json');
request.onreadystatechange = function () {
    if ((request.readyState===4) && (request.status===200)) {
        var items = JSON.parse(request.responseText);
        var output = '<ul>';
        for (var key in items) {
            output += '<li>' + items[key].product + '</li>';
        }
        output += '</ul>';
        document.getElementById('update').innerHTML = output;
    }
};

request.send();
}