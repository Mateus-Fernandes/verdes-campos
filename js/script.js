$(function() {
    $(".toggle_button").click(function(){
        $(".open", this).toggle('slow');
    });
    $(".miniaturas_case").each(function(){
        var count = $(this).children(".cada_miniatura").length;
        count = count - 3;
        if(count > 0){
            $('.cada_miniatura:nth-child(3) a', this).append("<div class='mask_miniatura'>+" + count + "</div>");
        } 
    });    

});


$('.case_slider_fade').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
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
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
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