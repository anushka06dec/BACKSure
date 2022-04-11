jQuery(document).ready(function($){

$(".page-scroll").click(function() {
  $('html,body').animate({scrollTop: $(".content-container").offset().top - 60},'slow');
});
/*==========================*/ 
/* sliders */ 
/*==========================*/
// if($('.simple-slider').length > 0){
// jQuery('.simple-slider').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   dots: true,
//   arrows: false, 
//   infinite: true, 
//   centerMode: false, 
   
// });
// }

/*==========================*/  
/* Mobile Slider */  
/*==========================*/ 
if($('.card-slider').length > 0){
jQuery('.card-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false, 
  infinite: true, 
  centerMode: false, 
  responsive: [
    {
      breakpoint: 5000,
      settings: "unslick"
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: false
      }
    }
  ]
});
}

 
/*==========================*/  
/* Mobile Slider */  
/*==========================*/ 
if($('.mobile-slider').length > 0){
jQuery('.mobile-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false, 
  infinite: true, 
  centerMode: false, 
  responsive: [
    {
      breakpoint: 5000,
      settings: "unslick"
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,  
        adaptiveHeight: true
      }
    }
  ]
});
}
 


/*==========================*/
/* Header fix */
/*==========================*/
var scroll = $(window).scrollTop();
if (scroll >= 10) {
    $("body").addClass("fixed");
} else {
    $("body").removeClass("fixed");
}


});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }
});



var newClass = window.location.href;
newClass = newClass.substring(newClass.lastIndexOf('/')+1, 5);
console.log(newClass);
$('body').addClass(newClass);