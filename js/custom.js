$(function () {
    if(localStorage.getItem('theme-selected') != null) {
        let cookieTheme = localStorage.getItem('theme-selected');
        $('#themeChangingSection').attr('data-theme', cookieTheme);
        $('.theme-selector-wrapper .theme-name').removeClass('active').parent().find('[data-name='+ cookieTheme +']').addClass('active');


    }

    $("#copyrightYear").text( (new Date).getFullYear() );



    $('.hamburger #sideBarMenuIcon').on('click', function () {
        $('.side-bar').toggleClass('shrunk');
    });

    $('.hamburger #topBarMenuIcon').on('click', function () {
        $('.side-bar').toggleClass('open');
    });

    $('.theme-selector-wrapper #theme-opener-btn').on('click', function () {
        $('.theme-selector-wrapper').toggleClass('open');
    });

    $('.theme-name').on('click', function () {
        let themeName = $(this).data('name');
        $(this).addClass('active').siblings().removeClass('active');
        $('#themeChangingSection').attr('data-theme', themeName);
        localStorage.setItem('theme-selected', themeName);
    });

});

$(window).on('load',function () {
    $('.latest-request .owl-carousel').owlCarousel({
        loop: false,
        margin: 20,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            800:{
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
});
