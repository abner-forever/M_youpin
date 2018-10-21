import shop_list_model from '../models/home_model'

let _shop_list = []
const render_data = async() => {
   await getShoplist()
   console.log('renderdata');
   
}
const getShoplist = async () => {
    let shop_data = await shop_list_model.shop_list()
    let shop_list = shop_data.data.homepage.floors
    console.log(shop_list)
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
    
}
export default {
    render_data
}