//'use strict';

$(function() {

    /*
    |--------------------------------------------------------------------------
    | Selectpicker
    |--------------------------------------------------------------------------
    */

    $('.jsSelectPicker').selectize();

    /*
    |--------------------------------------------------------------------------
    | fullPage
    |--------------------------------------------------------------------------
    */

    var myFullpage = new fullpage('#fullpage', {
        anchors: ['anchor0', 'anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5', 'anchor6'],
        navigation: true,
        normalScrollElements: '.scrollable-element',
        navigationPosition: 'right',
        //navigationTooltips: ['Главная', 'Преимущества проекта', 'УСЛОВИЯ ПРОГРАММЫ', 'Гарантии компании', 'Мы предлагаем', 'Рассчет онлайн', 'АКЦИИ', 'ВОПРОС ОТВЕТ', 'СВЯЗАТЬСЯ С НАМИ'],
        responsiveWidth: 1000,
        responsiveHeight: 700,
    });

    /*
    |--------------------------------------------------------------------------
    | Mobile menu
    |--------------------------------------------------------------------------
    */

    $('.modal').on('shown.bs.modal', function (e) {
        $('.lang').toggleClass('-inverted');
    });

    $('.modal').on('hide.bs.modal', function (e) {
        $('.lang').toggleClass('-inverted');
    });


    /*
    |--------------------------------------------------------------------------
    | Responsive iframe inside bootstrap modal
    |--------------------------------------------------------------------------
    */

    let iframeModal = document.getElementById('iframe-modal');
    let iframeModalItem = iframeModal.querySelector('.jsBmEmbedItem');

    document.addEventListener('click', function(e){
        if(e.target.classList.contains('jsBmButton')){
            let dataVideo = {
                'src': e.target.getAttribute('data-bmSrc'),
                //'height': e.target.getAttribute('data-bmHeight'),
                //'width': e.target.getAttribute('data-bmWidth')
            };

            for(let key in dataVideo){
                iframeModalItem.setAttribute(key, dataVideo[key]);
            };

            $('#iframe-modal').on('hidden.bs.modal', function(){
                iframeModalItem.innerHTML = '';
                iframeModalItem.setAttribute("src", "");
            });
        }
    });

    /*
    |--------------------------------------------------------------------------
    | Smooth Scroll
    |--------------------------------------------------------------------------
    */

    $('.page-scroll').on('click', function(event) {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            let target = $(this.hash),
                speed = $(this).data("speed") || 800;
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 0
                }, speed);
            }
        }
    });

    /*
    |--------------------------------------------------------------------------
    | Entry Slider
    |--------------------------------------------------------------------------
    */

	let entrySlider = new Swiper('.jsEntrySlider', {
		speed: 600,
		mousewheel: false,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		spaceBetween: 10,
		slidesPerView: 1,
	});

    /*
    |--------------------------------------------------------------------------
    | Works Slider
    |--------------------------------------------------------------------------
    */

    let worksSlider = new Swiper('.jsWorksSlider', {
        speed: 500,
        mousewheel: true,
        loop: true,
        spaceBetween: 15,
        navigation: {
            nextEl: '.jsWorksSliderNext',
            prevEl: '.jsWorksSliderPrev',
        },
        freeMode: false,
        slidesPerView: 3,
        pagination: {
            el: '.jsWorksPagination',
        },
        breakpoints: {
            1200: {
                slidesPerView: 2,
                freeMode: false,
            },
            1024: {
                slidesPerView: 2,
                freeMode: false,
            },
            768: {
                slidesPerView: 2,
                freeMode: true,
            },
            640: {
                slidesPerView: 1.25,
                spaceBetween: 30,
                freeMode: true,
            },
            320: {
                slidesPerView: 1.10,
                spaceBetween: 10,
                freeMode: true,
            }
        }
    });

    /*
    |--------------------------------------------------------------------------
    | Light Gallery
    |--------------------------------------------------------------------------
    */

	$('.lg').lightGallery({
		selector: ".lg__item",
	});

    /*
    |--------------------------------------------------------------------------
    | Polyfill object-fit/object-position on <img>: IE9, IE10, IE11, Edge, Safari, ...
    | https://github.com/bfred-it/object-fit-images
    |--------------------------------------------------------------------------
    */

    objectFitImages();
    // if you use jQuery, the code is: $(function () { objectFitImages() });

});
