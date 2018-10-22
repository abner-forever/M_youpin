let _shop_list = []
const render_data = async () => {
    await getShoplist()
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
    await render()
}
const render = () => {
    // 渲染首页商品数据
    // 商品列表
    $('.shop-list').load('/js/views/home_shoplist.html', () => {
        let _html = template('shoplist', {
            shop_list: _shop_list
        });
        $('.shop-list').html(_html);
    })

}

export default {
    render_data
}