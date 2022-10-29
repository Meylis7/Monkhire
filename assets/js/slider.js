

// Slider =======================================
$(".about_block-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: false,


    infinite: true,
    speed: 800,
    fade: false,
    adaptiveHeight: true,
    lazyLoad: 'ondemand',

    cssEase: 'linear',
    swipeToSlide: true,
    waitForAnimate: false,
    draggable: true,

    prevArrow: `<button type='button' class='slick-prev pull-left'> 
        <svg width="75" height="76" viewBox="0 0 75 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1_2704)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M37.6036 62.6036C52.2963 62.6036 64.2071 50.6928 64.2071 36.0001C64.2071 21.3073 52.2963 9.39648 37.6036 9.39648C22.9108 9.39648 11 21.3073 11 36.0001C11 50.6928 22.9108 62.6036 37.6036 62.6036Z" stroke="#F0F0F0"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M42.0942 35.3179H34.4747L37.1214 32.6712C37.3874 32.4052 37.3874 31.9686 37.1214 31.7025C36.8554 31.4365 36.4256 31.4365 36.1596 31.7025L32.3464 35.5157C32.0804 35.7818 32.0804 36.2115 32.3464 36.4775L36.1528 40.2975C36.4188 40.5636 36.8485 40.5636 37.1146 40.2975C37.3806 40.0315 37.3806 39.6018 37.1146 39.3357L34.4747 36.6822H42.0942C42.4694 36.6822 42.7764 36.3752 42.7764 36C42.7764 35.6249 42.4694 35.3179 42.0942 35.3179Z" fill="#455A64"/>
        </g>
        <defs>
        <filter id="filter0_d_1_2704" x="0.5" y="0.896484" width="74.207" height="74.207" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.229073 0 0 0 0 0.274695 0 0 0 0 0.365939 0 0 0 0.05 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2704"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2704" result="shape"/>
        </filter>
        </defs>
        </svg>    
    </button>`,

    nextArrow: `<button type='button' class='slick-next pull-right'> 
        <svg width="75" height="76" viewBox="0 0 75 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1_2708)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M37.6035 62.6036C22.9107 62.6036 10.9999 50.6928 10.9999 36.0001C10.9999 21.3073 22.9107 9.39648 37.6035 9.39648C52.2962 9.39648 64.207 21.3073 64.207 36.0001C64.207 50.6928 52.2962 62.6036 37.6035 62.6036Z" stroke="#F0F0F0"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.1128 35.3179H40.7323L38.0856 32.6712C37.8196 32.4052 37.8196 31.9686 38.0856 31.7025C38.3517 31.4365 38.7814 31.4365 39.0475 31.7025L42.8606 35.5157C43.1267 35.7818 43.1267 36.2115 42.8606 36.4775L39.0543 40.2975C38.7882 40.5636 38.3585 40.5636 38.0925 40.2975C37.8264 40.0315 37.8264 39.6018 38.0925 39.3357L40.7323 36.6822H33.1128C32.7376 36.6822 32.4307 36.3752 32.4307 36C32.4307 35.6249 32.7376 35.3179 33.1128 35.3179Z" fill="#455A64"/>
        </g>
        <defs>
        <filter id="filter0_d_1_2708" x="0.5" y="0.896484" width="74.207" height="74.207" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.229073 0 0 0 0 0.274695 0 0 0 0 0.365939 0 0 0 0.05 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2708"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2708" result="shape"/>
        </filter>
        </defs>
        </svg>
    </button>`,


    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});


$(".testimonial_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
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

    
    prevArrow: `<button type='button' class='slick-prev pull-left'> 
        <svg width="75" height="76" viewBox="0 0 75 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1_2704)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M37.6036 62.6036C52.2963 62.6036 64.2071 50.6928 64.2071 36.0001C64.2071 21.3073 52.2963 9.39648 37.6036 9.39648C22.9108 9.39648 11 21.3073 11 36.0001C11 50.6928 22.9108 62.6036 37.6036 62.6036Z" stroke="#F0F0F0"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M42.0942 35.3179H34.4747L37.1214 32.6712C37.3874 32.4052 37.3874 31.9686 37.1214 31.7025C36.8554 31.4365 36.4256 31.4365 36.1596 31.7025L32.3464 35.5157C32.0804 35.7818 32.0804 36.2115 32.3464 36.4775L36.1528 40.2975C36.4188 40.5636 36.8485 40.5636 37.1146 40.2975C37.3806 40.0315 37.3806 39.6018 37.1146 39.3357L34.4747 36.6822H42.0942C42.4694 36.6822 42.7764 36.3752 42.7764 36C42.7764 35.6249 42.4694 35.3179 42.0942 35.3179Z" fill="#455A64"/>
        </g>
        <defs>
        <filter id="filter0_d_1_2704" x="0.5" y="0.896484" width="74.207" height="74.207" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.229073 0 0 0 0 0.274695 0 0 0 0 0.365939 0 0 0 0.05 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2704"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2704" result="shape"/>
        </filter>
        </defs>
        </svg>    
    </button>`,

    nextArrow: `<button type='button' class='slick-next pull-right'> 
        <svg width="75" height="76" viewBox="0 0 75 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1_2708)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M37.6035 62.6036C22.9107 62.6036 10.9999 50.6928 10.9999 36.0001C10.9999 21.3073 22.9107 9.39648 37.6035 9.39648C52.2962 9.39648 64.207 21.3073 64.207 36.0001C64.207 50.6928 52.2962 62.6036 37.6035 62.6036Z" stroke="#F0F0F0"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.1128 35.3179H40.7323L38.0856 32.6712C37.8196 32.4052 37.8196 31.9686 38.0856 31.7025C38.3517 31.4365 38.7814 31.4365 39.0475 31.7025L42.8606 35.5157C43.1267 35.7818 43.1267 36.2115 42.8606 36.4775L39.0543 40.2975C38.7882 40.5636 38.3585 40.5636 38.0925 40.2975C37.8264 40.0315 37.8264 39.6018 38.0925 39.3357L40.7323 36.6822H33.1128C32.7376 36.6822 32.4307 36.3752 32.4307 36C32.4307 35.6249 32.7376 35.3179 33.1128 35.3179Z" fill="#455A64"/>
        </g>
        <defs>
        <filter id="filter0_d_1_2708" x="0.5" y="0.896484" width="74.207" height="74.207" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.229073 0 0 0 0 0.274695 0 0 0 0 0.365939 0 0 0 0.05 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2708"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2708" result="shape"/>
        </filter>
        </defs>
        </svg>
    </button>`

});
