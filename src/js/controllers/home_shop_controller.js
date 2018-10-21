
let _shop_list = []
const render_data = async () => {
    console.log('renderdata before');
    await getShoplist()
    console.log('renderdata after');

}
const getShoplist = async () => {

    // localStorage.setItem('key', JSON.stringify());
    //先加载轮播图时已经获取到了数据 就直接从sessionStorage中直接取数据
    let shop_data = await JSON.parse(sessionStorage.getItem('key'))
    

    let shop_list = shop_data.data.homepage.floors
    for (let i = 0; i < shop_list.length; i++) {
        if (i > 9) {
            _shop_list.push(shop_list[i])
        }
    }
    console.log(_shop_list);
    console.log($('.shop-list'));
    await render()
}
const render = () => {
    // 渲染首页商品数据
    


    // 商品列表
   $('.shop-list').load('/js/views/shoplist.html',()=>{
       let _html = template('shoplist',{
           shop_list: _shop_list
       });
       $('.shop-list').html(_html);
   })
    
    // 商品列表
    $('.shop-list').load('/js/views/shoplist.html', () => {
        let _html = template('shoplist', {
            shop_list: _shop_list
        });
        $('.shop-list').html(_html);
    })
    Switchoptions()
}
//切换tab
const Switchoptions = () => {
    $('.tab').on('tap', '.tab-item', function () {
        $(this).find('div').addClass('active').end().siblings().find('div').removeClass('active')
    })
}
export default {
    render_data
}