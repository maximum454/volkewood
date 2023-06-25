@@include('./partials/swiper-bundle.min.js')
@@include('./partials/remodal.js')
@@include('./partials/jquery.mask.js')


if(document.querySelector('.swiper-brands')) {
    const swiperBrands = new Swiper('.swiper-brands', {
        slidesPerView: 7.8,
        centeredSlides: true,
        loop: true,
        spaceBetween: 53,
        breakpoints: {
            320: {
                slidesPerView: 4,
                spaceBetween: 35
            },
            768: {
                slidesPerView: 4.3,
                spaceBetween: 53
            },
            1024: {
                slidesPerView: 7.8,
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

})
