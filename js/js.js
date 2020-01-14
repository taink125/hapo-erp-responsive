
$(document).ready(function(){
	$("#myCarousel1").carousel();
});

$(document).ready(function(){
	$("#myCarousel2").carousel();
});

$(document).ready(function(){
	$('#myCarousel1, #myCarousel2').carousel({
		interval: false
	});
});