//获取首页商品信息
//https://app.youpin.mi.com/homepage/main/v1002?platform=m
const shop_list_cache = ()=>{
    
    return $.ajax({
        url:'/youpin/homepage/main/v1002?platform=m',
        dataType:'json',
        success :(res)=>{
            return res;
        }
    })
    //https://app.youpin.mi.com/app/shopv3/pipe

}
let shop_list = shop_list_cache
export default{
    shop_list
}