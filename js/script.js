$(function() {
    $(".toggle_button").click(function(){
        $(".toggle_button .open").hide('slow');
        $(".open", this).toggle('slow');
    });
    $(".miniaturas_case").each(function(){
        var count = $(this).children(".cada_miniatura").length;
        count = count - 3;
        if(count > 0){
            $('.cada_miniatura:nth-child(3) a', this).append("<div class='mask_miniatura'>+" + count + "</div>");
        } 
    });
    
    $(".hamburger").click(function()
    {
        $(".navigation").toggleClass("open_menu");
    });
    
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));

      $('li.nav-item a').removeClass('active');
      $(this).addClass('active');
      if( target.length ) {
          
          event.preventDefault();
          var top = (target.offset().top) - 140;
          $('html, body').stop().animate({
              scrollTop: top
          }, 1000);
      }
    });    

    $('.modal').on('shown.bs.modal', function (e) {
      $('.imagens_modal_produto').slick("setPosition", 0); //fix bug on slick modal
    });
});

window.onscroll = function() {offSetHeader()};
var header = document.getElementById("menu_site");
// Get the offset position of the navbar
var sticky = header.offsetTop;

function offSetHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky_m");
  } else {
    header.classList.remove("sticky_m");
  }
}

$('.case_slider_fade').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    speed: 500,
    fade: true,
    cssEase: 'linear'        
  });

  $('.produto_slick').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
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
  
  $('.depoimentos_lista').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false
  });
  
  $('.imagens_modal_produto').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false
  });

  AOS.init();