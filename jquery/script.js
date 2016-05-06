/**
 * Created by Koral on 5/6/2016.
 */

$('#update').load('data.txt');

//This takes care of a lot of compatibility issues and handles creating and sending the XHR request

//$('.update').load('data.txt');

//This works...but it's not universally compatible. Classes are restricted for things that appear multiple times in the DOM so it makes more sense to use ID

$('.update:even').load('data.txt');