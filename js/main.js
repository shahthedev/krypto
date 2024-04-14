$('#owl-theme').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // navText : ["<i class='owl-prev'></i>","<i class='owl-next'></i>"],
    navText : ["<i class='fa fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],

    dots:false,

    responsive:{
        0:{
            items:1
        },

        600:{
            items:1
        },
        800:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
$('#owl-testemonial').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // navText : ["<i class='owl-prev'></i>","<i class='owl-next'></i>"],
    navText : ["<i class='fa fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],

    dots:false,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
});
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});