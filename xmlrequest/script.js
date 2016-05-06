/**
 * Created by Koral on 5/4/2016.
 */

var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'data.xml');
request.onreadystatechange = function () {
    if ((request.readyState===4) && (request.status===200)) {

        //Get the text from the first item using the node. This removes tag

        console.log(request.responseXML.getElementsByTagName('name')[1].childNodes[0].nodeValue);
        //can also use .firstChild. This now has the text without the quotes or tags

        var items = request.responseXML.getElementsByTagName('name');

        var output = '<ul>';

        for (var i = 0; i < items.length; i++) {
            output += '<li>' + items[i].firstChild.nodeValue + '</li>';
        }
        output += '</ul>';
        document.getElementById('update').innerHTML = output;
    }
};

request.send();
