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

    $('#fontChanger').on('click', function () {
        let bodyStyles = window.getComputedStyle(document.body);
        let setStyles = document.documentElement.style;
        let f13 = parseInt(bodyStyles.getPropertyValue('--font-13'));
        let f15 = parseInt(bodyStyles.getPropertyValue('--font-15'));
        let f20 = parseInt(bodyStyles.getPropertyValue('--font-20'));
        let f30 = parseInt(bodyStyles.getPropertyValue('--font-30'));

        if($(this).find('sup').html() === '+') {
            $(this).find('sup').html('-');
        }else {
            $(this).find('sup').html('+');
        }


        setStyles.setProperty('--font-13', toggleFontSize(f13, 13));
        setStyles.setProperty('--font-15', toggleFontSize(f15, 15));
        setStyles.setProperty('--font-20', toggleFontSize(f20, 20));
        setStyles.setProperty('--font-30', toggleFontSize(f30, 30));


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

function toggleFontSize($fontValue, $defaultSize) {
    if($defaultSize >= $fontValue){
        $fontValue = $defaultSize + 2;
    }else {
        $fontValue = $defaultSize - 2
    }
    return $fontValue+ 'px';
}
