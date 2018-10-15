
import shop_list_model from '../models/shoplist_model'

console.log('渲染商品');


const render = () => {
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