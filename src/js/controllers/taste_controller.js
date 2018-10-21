
import taste_template from "../views/taste.html";
import smallbox from './small__box-box'
import findgood from './findgood--many--father'
import picturetemplate from './template'
// import swiper from './swiper'


// console.log('findgood--many--father')

// console.log(datas)


const render = () => {

    

    smallbox.smallbox();
    findgood.findgood();
    picturetemplate.picturetemplate();
    document.querySelector("#app").innerHTML = taste_template;
    // swiper.swiper();
    


}


export default {


    render

    
}