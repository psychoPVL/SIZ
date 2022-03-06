jQuery(document).ready(function ($) {

   $('.burger').click(function (e) {
      e.preventDefault();
      $('.open-mnu').addClass('open');
      $('.overlay').fadeIn();
   });
   $('.overlay, .open-mnu-close').click(function () {
      $('.open-mnu').removeClass('open');
      $('.overlay').fadeOut();
   });


   $('.article__box').slick({
      infinite: true,
      centerMode: false,
      slidesToShow: 5,
      speed: 200,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      cssEase: 'ease-out',
      dots: false,
      variableWidth: false,
      responsive: [
         {
            breakpoint: 1281,
            settings: {
               slidesToShow: 5
            }
         },
         {
            breakpoint: 993,
            settings: {
               slidesToShow: 4
            }
         },
         {
            breakpoint: 990,
            settings: {
               slidesToShow: 3
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 571,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   });

   $('.').slick({
      infinite: true,
      centerMode: false,
      slidesToShow: 1,
      speed: 200,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      cssEase: 'ease-out',
      dots: false,
      variableWidth: false,
      responsive: [
         {
            breakpoint: 1281,
            settings: {
               slidesToShow: 5
            }
         },
         {
            breakpoint: 993,
            settings: {
               slidesToShow: 4
            }
         },
         {
            breakpoint: 990,
            settings: {
               slidesToShow: 3
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 571,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   });

   $('[data-fancybox="gallery"]').fancybox({
      arrows: true,
      infobar: false,
      smallBtn: true,
      toolbar: false,
      iframe: {
         css: {
            width: '950px'
         }
      },
      slideClass: "myClass",
      baseClass: "myclass"
   });
});