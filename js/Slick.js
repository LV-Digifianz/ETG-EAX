$(document).ready(function(){
    $('.dfz-month-data').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase:'linear',
        infinite: true,
        focusOnSelect: false,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {      
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.stakeholders-slider').slick({
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 0,
        fade: true,
        speed: 600,
        cssEase:'linear',
        infinite: true,
        focusOnSelect: false,
        arrows: false,
        dots: true
       
    });







  });
