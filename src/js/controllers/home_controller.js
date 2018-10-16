import shop_list_model from '../models/home_model'

console.log('渲染商品');


const render = () => {

    //1.处理轮播图
    new Swiper('.slideshow-item', {
        autoplay:true,
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            
        },
    })

    getShoplist();
}



const getShoplist = async () => {

    let shop_data = await shop_list_model.shop_list();
    let shop_list = shop_data.data.homepage.floors;
    console.log(shop_list);

}

export default {
    render
}