$(function () {
    $('.hamburger #sideBarMenuIcon').on('click', function () {
        $('.side-bar').toggleClass('shrunk');
    });

    $('.hamburger #topBarMenuIcon').on('click', function () {
        $('.side-bar').toggleClass('open');
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
