import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function dishesSwiper() {
    const certificatesSwiper = new Swiper('.dishes__swiper', {
        slidesPerView: 'auto',
        spaceBetween: rem(4),
        loop: true,
        speed: 1200,
        grabCursor: true,
        spaceBetween: 40,
        spaceBetween: 20,
        centeredSlides: true,

        breakpoints: {
            768: {
                slidesPerView: `auto`,
                // slidesPerView: 4.35,
                spaceBetween: 40,
                spaceBetween: 20,
                spaceBetween: rem(2),

                initialSlide: 1,
                centeredSlides:false,
            }
        }
    });
}

export default dishesSwiper;
