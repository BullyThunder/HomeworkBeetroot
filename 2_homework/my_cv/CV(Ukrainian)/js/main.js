$(".middle_slider_content").slick({
   slidesToShow: 5,
  slidesToScroll: 1,               
  dots: true,
  arrows:true,
  speed:700,  
  prevArrow: $('.prev'),
  nextArrow: $('.next'), 
  dotsClass: 'slick-dots',
  responsive: [
  
    {
      breakpoint: 1920, // - от какой ширины изменять настройки(1024 и ниже)
      settings: {
        arrows: true,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1146, // - от какой ширины изменять настройки(1024 и ниже)
      settings: {
        arrows: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 925, // брекпоинтов может быть сколько угодно
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 690, // брекпоинтов может быть сколько угодно
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480, // брекпоинтов может быть сколько угодно
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});
$(".footer_slider_lining").slick({
   slidesToShow: 3,
  centerMode: true,
  slidesToScroll: 1,               
  dots: true,
  arrows:true,
  speed:700,
  infinite: true, 
  adaptiveHeight: true,
  variableWidth: true,  
  arrows:true,
  prevArrow: $('.previus'),
  nextArrow: $('.nexting'),
  responsive: [
  
    {
      breakpoint: 1084,
      settings: {
        arrows: true,
        dots: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1
       

      }
    },
    {
      breakpoint: 899, 
      settings: {
      	arrows: true,
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

});
$(".header__slider").slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   vertical:true,
   arrows: false,
   verticalSwiping: true,
   autoplaySpeed:10000,
   autoplay:false,
  slidesToScroll: 1,          
  speed:700,
  responsive: [
    {
        breakpoint: 881,
        settings: "unslick"
    }
]
});
function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu_button', '.burger-menu_lines');
  let links = menu.find('.burger-menu_link');
  let overlay = menu.find('.burger-menu_overlay');
  
  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  
  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
  
  function toggleMenu(){
    menu.toggleClass('burger-menu_active');
    
    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');

