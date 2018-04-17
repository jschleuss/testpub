/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	// cycle plugin
	$(".slideshow").cycle({
		fx: 'fade',
		timeout: 0,
		next: "#next",
		prev: "#prev"
	});



}); //end document.ready block
