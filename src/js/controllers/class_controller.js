import class_template from "../views/class.html";


const render = () => {

    document.querySelector("#app").innerHTML = class_template;

   
    
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        freeModeMomentum : false,
        slidesPerView: 13,
        spaceBetween: 50,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });


    switchClass();


    console.log("11");
    

}
const switchClass = () => {
    $(".swiper-slide").on("tap",function(){
        $(this).addClass("selected").siblings().removeClass("selected");
    })
}

export default {


    render

    
}