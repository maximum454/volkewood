@@include('./partials/swiper-bundle.min.js')
@@include('./partials/remodal.js')
@@include('./partials/jquery.mask.js')


if(document.querySelector('.swiper-products')){
    const swiperProducts = new Swiper('.swiper-products', {
        slidesPerView: 5,
        centeredSlides: true,
        centeredSlidesBounds: true,
        spaceBetween: 40,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 40,
            }
        }
    })
}
function getDirection() {
    let windowWidth = window.innerWidth;
    let direction = window.innerWidth <= 1023 ? 'horizontal' : 'vertical';

    return direction;
}


$(function (){

    $('.js-menu').on('click', function (){
        $('.nav').addClass('active')
        $('body').addClass('lock')
        $('.wrp__overlay').addClass('active')
    })

    $('.wrp__overlay').on('click', function (){
        $('.nav').removeClass('active')
        $('body').removeClass('lock')
        $('.wrp__overlay').removeClass('active')
    })

    $('.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.tabs').children('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#to-top').fadeIn();
        } else {
            $('#to-top').fadeOut();
        }
    });

    $('#to-top').click(function() {
        $('html, body').animate({scrollTop:0}, '300');
    });
})
