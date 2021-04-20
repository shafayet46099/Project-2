jQuery(document).ready(function(){


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:50,
	    smartSpeed:800,
	    dots:false,
	    autoplay:true,
	    autoplayTimeout:1000,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	        },
	        600:{
	            items:4,
	        },
	        1000:{
	            items:6,
	        }
	    }
	})
	
	new WOW().init();

});