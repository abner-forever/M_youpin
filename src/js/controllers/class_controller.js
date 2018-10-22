import class_template from "../views/class.html";
import goods_datas from "../models/class_model";


const render = async () => {
    let goods = await getGoodsData();
    let goods_data = goods.result.request.data;
    let goodsdata = [];
    for (var i = 1; i < goods_data.length; i++) {
        goodsdata.push(goods_data[i]);
    }

    document.querySelector("#app").innerHTML = class_template;

    $(".goods-container").load("/js/views/class_goods.html", () => {
        let _html = template("goods-template", {
            goodsdata: goodsdata
        });
        $('.goods-container').html(_html);
    })

    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        freeModeMomentum: false,
        slidesPerView: 13,
        spaceBetween: 50,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    switchClass();

}
const switchClass = () => {
    $(".swiper-slide").on("tap", function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    })
}

const getGoodsData = () => {
    let goods = goods_datas.goods_data();
    return goods;
}

export default {
    render
}