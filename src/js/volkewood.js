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

})
