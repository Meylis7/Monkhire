

// Swiper Slider ==================

var swiper = new Swiper(".news_slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        slidesPerView: 1,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    speed: 600,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

$('.swiper-pagination-bullet').hover(function () {
    $(this).trigger("click");
});

// Slider =======================================
$(".hero_slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,


    infinite: true,
    speed: 800,
    fade: true,
    adaptiveHeight: true,
    lazyLoad: 'ondemand',

    cssEase: 'linear',
    swipeToSlide: true,
    waitForAnimate: false,
    draggable: true,
});

// $('.news_slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     dots: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     centerMode: true,
//     centerPadding: '15%',


//     infinite: true,
//     speed: 800,
//     fade: false,
//     adaptiveHeight: false,
//     lazyLoad: 'ondemand',

//     cssEase: 'linear',
//     swipeToSlide: true,
//     waitForAnimate: false,
//     draggable: true,

//     responsive: [
//         {
//             breakpoint: 1270,
//             settings: {
//                 centerPadding: '5%',
//                 arrows: false,
//             }
//         },
//         {
//             breakpoint: 900,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 arrows: false,
//             }
//         },
//         {
//             breakpoint: 800,
//             settings: {
//                 centerPadding: '3.4%',
//             }
//         }
//     ]
// });

$(".project_box").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    dots: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '15%',


    infinite: true,
    speed: 800,
    fade: false,
    adaptiveHeight: false,
    lazyLoad: 'ondemand',

    cssEase: 'linear',
    swipeToSlide: true,
    waitForAnimate: false,
    draggable: true,

    responsive: [
        {
            breakpoint: 1270,
            settings: {
                centerPadding: '5%',
                arrows: false,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 800,
            settings: {
                centerPadding: '3.4%',
            }
        }
    ]
});

$(".banner_box").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '0',


    infinite: true,
    speed: 800,
    fade: false,
    adaptiveHeight: false,
    lazyLoad: 'ondemand',

    cssEase: 'linear',
    swipeToSlide: true,
    waitForAnimate: false,
    draggable: true,
});


