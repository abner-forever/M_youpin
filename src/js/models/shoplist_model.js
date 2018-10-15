//获取首页商品信息
//https://app.youpin.mi.com/homepage/main/v1002?platform=m
const shop_list = ()=>{
    return $.ajax({
        url:'/youpin/homepage/main/v1002?platform=m',
        dataType:'json',
        success :(res)=>{
            return res;
        }
    })
}
export default{
    shop_list
}