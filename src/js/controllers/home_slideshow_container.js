import shop_list_model from '../models/home_model'
import slideshow_template from '../views/slideshow.html'
import shoplist_template from '../views/shoplist.html'

let _slideshow = {}
const render_slideshow = async () => {
    await getSlideshow()
    console.log('渲染轮播图');

}
const getSlideshow = async () => {
    let shop_data = await shop_list_model.shop_list()
    let shop_list = shop_data.data.homepage.floors
    _slideshow = shop_list[0]
    _slideshow = _slideshow.data.items
    console.log('_slideshow', _slideshow);
    await render()
}
const render = () => {
    // 渲染首页商品数据

    // 轮播图
    $('.slideshow').load('/js/views/slideshow.html', () => {
        //处理轮播图
        let _html = template('slideshow', {
            slideshow: _slideshow
        });
        $('.slideshow').html(_html)
        let myswiper = new Swiper('.slideshow-item', {
            autoplay: true,
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',

            }
        })
        // myswiper.update()
    })

}
export default {
    render_slideshow
}