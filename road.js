jQuery(document).ready(function(){


	$('.road-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    dots:false,
	    autoplay:false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	        },
	        600:{
	            items:3,
	        },
	        1000:{
	            items:5,
	        }
	    }
	})
	new WOW().init();

});