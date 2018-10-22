
import taste_template from "../views/taste.html";
import smallbox from './small__box-box'
import findgood from './findgood--many--father'
import picturetemplate from './template'


// import from '../../static/js/swiper-4.3.5.min.js'
// import swiper from './swiper'


// console.log('findgood--many--father')

// console.log(datas)


const render = () => {

    smallbox.smallbox();
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
        loop: true,// 循环模式选项
        autoplay: {
            disableOnInteraction: false
        }// 自动播放
    })
    console.log("swiper")


}


export default{
    render
}