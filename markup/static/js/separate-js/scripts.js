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
        onLeave: function(destination) {
            if(destination.index == 4){
                counter();
            }
        },
    });

    /*
    |--------------------------------------------------------------------------
    | Counter
    |--------------------------------------------------------------------------
    */

    $('.js-counter').each(function(){
        $(this).attr("data-count", $(this).text());
    });

    function counter() {
        $('.js-counter').each(function (){
            $(this).stop().prop('Counter',0).animate({
                Counter: $(this).attr("data-count")
            },{	duration: 4000,
                easing: 'swing',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    };

    /*
    |--------------------------------------------------------------------------
    | Mobile menu
    |--------------------------------------------------------------------------
    */

    $(document).on('hidden.bs.modal', function (event) {
        if ($('.modal:visible').length) {
            $('body').addClass('modal-open');
        }
    });

    $('.modal').on('show.bs.modal', function (e) {

    });

    $('.modal').on('hide.bs.modal', function (e) {

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
		speed: 800,
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
