$(document).ready(function(){
	$('#featCarousel, #entryCarousel').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		mouseDrag: false,
		navText: 
		[
			'<i class="fa fa-angle-left"></i>',
			'<i class="fa fa-angle-right"></i>'
		]
	});
});