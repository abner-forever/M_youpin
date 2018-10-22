import taste_template from "../views/taste.html";
import taste_slideshow from './taste_slideshow_controller'
import findgood from './taste_intro_controller'
import picturetemplate from './taste_discoverylist_controller'


const render = () => {

    taste_slideshow.smallbox();

    findgood.findgood();
    picturetemplate.picturetemplate();
    document.querySelector("#app").innerHTML = taste_template;
    // swiper.swiper();
    new Swiper('.swiper--big-box-father', {
        slidesPerView: 3,
        spaceBetween: 20,
        // freeMode: true,
        centeredSlides: true,
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        autoplay: {
            disableOnInteraction: false
        } // 自动播放
    })
}

export default {
    render
}