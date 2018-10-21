//获取首页商品信息
//https://app.youpin.mi.com/homepage/main/v1002?platform=m
const shop_lists = () => {
    return $.ajax({
        url: '/youpin/homepage/main/v1002?platform=m',
        dataType: 'json',
        success: (res) => {
            return res;
        }
    })
    //https://app.youpin.mi.com/app/shopv3/pipe

}

const shop_list = async ()=>{
   let data = await shop_lists()
   await sessionStorage.setItem('key', JSON.stringify(data));
    return data
}


export default {
    shop_list
}