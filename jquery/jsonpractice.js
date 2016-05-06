/**
 * Created by Koral on 5/6/2016.
 */

$.getJSON('data.json', function(data) {
    var output = '<ul>';
    $.each(data, function(key, value){
        output += '<li>' + value.name + '</li>';
    });
    output += '</ul>';
    $('#updatetwo').append(output);
    //Can also prepend, etc. 
});